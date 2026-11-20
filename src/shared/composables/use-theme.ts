import { computed, readonly, ref } from 'vue'
import { setMetaContent } from '../lib/meta'
import type { ThemeId } from '../types/theme'

const DARK_QUERY = '(prefers-color-scheme: dark)'
/** 移动端浏览器 UI 配色，跟随主题切换 */
const DARK_BROWSER_COLOR = '#191c1e'

const systemTheme = (): ThemeId =>
  typeof window !== 'undefined' && window.matchMedia?.(DARK_QUERY).matches === true ? 'dark' : 'light'

const current = ref<ThemeId>(systemTheme())
/** 当前路由给出的亮色 theme-color；暗色下让位给 DARK_BROWSER_COLOR */
let routeThemeColor = '#ffffff'

const syncBrowserThemeColor = () => {
  setMetaContent('theme-color', current.value === 'dark' ? DARK_BROWSER_COLOR : routeThemeColor)
}

const apply = (id: ThemeId) => {
  current.value = id
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.dataset.theme = id
  // Tailwind 的 dark 变体挂在 .dark 上，见 shared/styles/ui.css
  root.classList.toggle('dark', id === 'dark')
  root.style.colorScheme = id
  syncBrowserThemeColor()
}

let watchingSystem = false

const watchSystem = () => {
  if (watchingSystem || typeof window === 'undefined' || !window.matchMedia) return
  watchingSystem = true
  window.matchMedia(DARK_QUERY).addEventListener('change', (event) => apply(event.matches ? 'dark' : 'light'))
}

/** 路由元数据里的亮色 theme-color 交给主题层统一写入，避免导航时覆盖暗色值 */
export function setRouteThemeColor(color: string): void {
  routeThemeColor = color
  syncBrowserThemeColor()
}

/** 明暗只跟随系统，站内不提供切换 */
export function useTheme() {
  /** 按系统偏好写一遍 `<html>` 标记，并开始跟随系统变化（挂载时调用） */
  const sync = () => {
    apply(systemTheme())
    watchSystem()
  }

  return {
    current: readonly(current),
    isDark: computed(() => current.value === 'dark'),
    sync
  }
}
