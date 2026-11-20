import { onBeforeUnmount, onMounted, shallowReactive } from 'vue'
import { commands, type CommandId } from './commands'
import { matchShortcut } from './shortcuts'

/** 两键跳转里，第一个键按下后等第二个键的时间 */
const SEQUENCE_TIMEOUT_MS = 1500

const handlers = shallowReactive(new Map<CommandId, () => void>())

/** 组件挂着时登记命令的处理函数，卸载时撤掉；登记了的命令才算「当前页面能用」 */
export function useCommand(id: CommandId, run: () => void): void {
  onMounted(() => handlers.set(id, run))
  onBeforeUnmount(() => {
    if (handlers.get(id) === run) handlers.delete(id)
  })
}

export function isCommandAvailable(id: CommandId): boolean {
  return handlers.has(id)
}

export function runCommand(id: CommandId): void {
  handlers.get(id)?.()
}

/**
 * 在 window 上听键盘，按命令表派发给登记过的处理函数。
 * `paused` 为真时（快捷键清单这类弹层开着）整个停听，`Esc` 交给弹层自己关。
 */
export function useShortcutListener(paused: () => boolean): void {
  let pending: string | undefined
  let pendingTimer: ReturnType<typeof setTimeout> | undefined

  const clearPending = () => {
    pending = undefined
    clearTimeout(pendingTimer)
  }

  const onKeydown = (event: KeyboardEvent) => {
    if (paused() || event.defaultPrevented) return clearPending()

    const match = matchShortcut(commands, event, pending)
    clearPending()

    if (match.pending) {
      pending = match.pending
      pendingTimer = setTimeout(clearPending, SEQUENCE_TIMEOUT_MS)
      return
    }
    if (!match.command || !isCommandAvailable(match.command.id)) return

    event.preventDefault()
    runCommand(match.command.id)
  }

  onMounted(() => window.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    clearPending()
  })
}
