/**
 * 全站唯一的命令表。快捷键清单、悬停提示和键盘监听都从这里读，页面里不另写快捷键文字。
 * 命令什么时候能用，看当前页面有没有登记它的处理函数（见 use-commands.ts）。
 */
export type CommandId =
  | 'go-resume'
  | 'go-online'
  | 'next-block'
  | 'prev-block'
  | 'copy-block'
  | 'leave-block'
  | 'copy-markdown'
  | 'show-shortcuts'

export type CommandGroup = '跳转' | '线上版' | '通用'

export interface Command {
  id: CommandId
  group: CommandGroup
  label: string
  /** 依次按下的键。两个键是先按 G 再按第二个键的跳转；单键只在没在打字时响应 */
  keys: readonly string[]
}

export const commands: readonly Command[] = [
  { id: 'go-resume', group: '跳转', label: '去简历', keys: ['G', 'R'] },
  { id: 'go-online', group: '跳转', label: '去线上版', keys: ['G', 'O'] },
  { id: 'next-block', group: '线上版', label: '下一段', keys: ['J'] },
  { id: 'prev-block', group: '线上版', label: '上一段', keys: ['K'] },
  { id: 'copy-block', group: '线上版', label: '复制这一段', keys: ['C'] },
  { id: 'leave-block', group: '线上版', label: '不选这一段', keys: ['Esc'] },
  { id: 'copy-markdown', group: '通用', label: '复制为 Markdown', keys: ['M'] },
  { id: 'show-shortcuts', group: '通用', label: '全部快捷键', keys: ['?'] }
]

export const commandGroups: readonly CommandGroup[] = ['跳转', '线上版', '通用']

export function commandById(id: CommandId): Command {
  return commands.find((c) => c.id === id)!
}
