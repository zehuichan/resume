import type { Command } from './commands'

export interface KeyPress {
  key: string
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
  shiftKey: boolean
  target: EventTarget | null
}

export interface ShortcutMatch {
  command?: Command
  /** 按下了两键跳转的第一个键，等第二个 */
  pending?: string
}

/** 正在输入框、下拉框或可编辑区域里打字 */
export function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return true
  return target.closest('[contenteditable]:not([contenteditable="false"])') !== null
}

/** 把按键换成命令表里的写法；带 Ctrl、⌘、Alt 的组合和 Shift 加字母都留给浏览器和系统 */
export function keyName(press: KeyPress): string | undefined {
  if (press.ctrlKey || press.metaKey || press.altKey) return undefined
  if (press.key === 'Escape') return 'Esc'
  if (press.key === '?') return '?'
  if (/^[a-z]$/i.test(press.key) && !press.shiftKey) return press.key.toUpperCase()
  return undefined
}

/**
 * 按命令表找这一下按键对应的命令。第二个键对不上两键跳转时，按单键重新找，
 * 这样按了 G 之后改按 J 照样是「下一段」。
 */
export function matchShortcut(
  table: readonly Command[],
  press: KeyPress,
  pending?: string
): ShortcutMatch {
  if (isTyping(press.target)) return {}
  const key = keyName(press)
  if (!key) return {}

  if (pending) {
    const sequence = table.find((c) => c.keys.length === 2 && c.keys[0] === pending && c.keys[1] === key)
    if (sequence) return { command: sequence }
  }

  const single = table.find((c) => c.keys.length === 1 && c.keys[0] === key)
  if (single) return { command: single }

  if (table.some((c) => c.keys.length === 2 && c.keys[0] === key)) return { pending: key }
  return {}
}
