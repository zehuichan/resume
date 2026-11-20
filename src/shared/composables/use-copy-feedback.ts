import { onBeforeUnmount, ref } from 'vue'
import { copyText } from '../lib/clipboard'

export type CopyStatus = 'idle' | 'copied' | 'failed'

/** 「已复制」在按钮上停留的时间；「复制失败」一直留到下一次复制 */
const COPIED_MS = 1600

export const copyLabels: Record<CopyStatus, string> = {
  idle: '复制',
  copied: '已复制',
  failed: '复制失败'
}

/** 按 key 记最近一次复制的结果，按钮原地显示，不弹框 */
export function useCopyFeedback() {
  const last = ref<{ key: string; status: Exclude<CopyStatus, 'idle'> }>()
  let timer: ReturnType<typeof setTimeout> | undefined

  async function copy(key: string, text: string): Promise<boolean> {
    const ok = await copyText(text)
    clearTimeout(timer)
    last.value = { key, status: ok ? 'copied' : 'failed' }
    if (ok) timer = setTimeout(() => (last.value = undefined), COPIED_MS)
    return ok
  }

  const statusOf = (key: string): CopyStatus => (last.value?.key === key ? last.value.status : 'idle')

  onBeforeUnmount(() => clearTimeout(timer))

  return { copy, statusOf }
}
