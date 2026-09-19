import { computed, readonly, ref } from 'vue'
import { themes } from '../data/themes'
import { setMetaContent } from '../lib/meta'
import type { ThemeId } from '../types/theme'

const STORAGE_KEY = 'resume-theme'
const FALLBACK_THEME: ThemeId = 'light'
const DARK_QUERY = '(prefers-color-scheme: dark)'
/** 移动端浏览器 UI 配色，跟随主题切换 */
const DARK_BROWSER_COLOR = '#15181d'

const normalizeThemeId = (value: string | null | undefined): ThemeId | undefined => {
  if (value === 'kami') return 'light'
  return themes.some((t) => t.id === value) ? (value as ThemeId) : undefined
}

const readStored = (): ThemeId | undefined => {
  try {
    return normalizeThemeId(localStorage.getItem(STORAGE_KEY))
  } catch {
    // localStorage 不可用时忽略
    return undefined
  }
}

const prefersDark = (): boolean => typeof window !== 'undefined' && window.matchMedia?.(DARK_QUERY).matches === true

/** 初始值：`<html data-theme>`（index.html 防闪烁脚本写入）→ localStorage → 系统偏好 */
const readInitial = (): ThemeId => {
  if (typeof document !== 'undefined') {
    const fromDom = normalizeThemeId(document.documentElement.dataset.theme)
    if (fromDom) return fromDom
  }
  return readStored() ?? (prefersDark() ? 'dark' : FALLBACK_THEME)
}

const current = ref<ThemeId>(readInitial())
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

/** 用户没手动选过主题时跟随系统；一旦手动选择就不再跟随 */
const watchSystem = () => {
  if (watchingSystem || typeof window === 'undefined' || !window.matchMedia) return
  watchingSystem = true
  window.matchMedia(DARK_QUERY).addEventListener('change', (event) => {
    if (!readStored()) apply(event.matches ? 'dark' : 'light')
  })
}

/** 路由元数据里的亮色 theme-color 交给主题层统一写入，避免导航时覆盖暗色值 */
export function setRouteThemeColor(color: string): void {
  routeThemeColor = color
  syncBrowserThemeColor()
}

export function useTheme() {
  /** 与防闪烁脚本写入的 `<html data-theme>` 同步，并开始跟随系统（挂载时调用） */
  const sync = () => {
    apply(readInitial())
    watchSystem()
  }

  const setTheme = (id: ThemeId) => {
    apply(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // localStorage 不可用时忽略
    }
  }

  const toggle = () => setTheme(current.value === 'dark' ? 'light' : 'dark')

  return {
    current: readonly(current),
    isDark: computed(() => current.value === 'dark'),
    themes,
    setTheme,
    toggle,
    sync
  }
}
