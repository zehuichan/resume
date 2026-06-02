import { readonly, ref } from 'vue'
import type { Theme, ThemeId } from '../types'
import { themes } from '../data'

const STORAGE_KEY = 'resume-theme'
const DEFAULT_THEME: ThemeId = 'redstone'

const isThemeId = (value: string | null | undefined): value is ThemeId =>
  themes.some((t) => t.id === value)

/** 初始值优先取 `<html data-theme>`（由 index.html 的防闪烁脚本写入），其次取 localStorage */
const readInitial = (): ThemeId => {
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.dataset.theme
    if (isThemeId(fromDom)) return fromDom
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isThemeId(stored)) return stored
  } catch {
    // localStorage 不可用时忽略
  }
  return DEFAULT_THEME
}

const current = ref<ThemeId>(readInitial())

const apply = (id: ThemeId) => {
  current.value = id
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = id
  }
}

export function useTheme() {
  /** 与防闪烁脚本写入的 `<html data-theme>` 同步（挂载时调用） */
  const sync = () => apply(readInitial())

  const setTheme = (id: ThemeId) => {
    apply(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // localStorage 不可用时忽略
    }
  }

  return {
    current: readonly(current),
    themes: themes as readonly Theme[],
    setTheme,
    sync
  }
}
