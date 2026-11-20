import { afterEach, describe, expect, it, vi } from 'vitest'
import type { useTheme as UseTheme } from './use-theme'

type SystemChangeListener = (event: { matches: boolean }) => void

/** 主题状态是模块级单例，每个用例都要拿到全新的模块实例 */
async function loadTheme(options: { systemDark?: boolean } = {}): Promise<{
  useTheme: typeof UseTheme
  setRouteThemeColor: (color: string) => void
  emitSystemChange: (dark: boolean) => void
}> {
  const listeners: SystemChangeListener[] = []

  // jsdom 不实现 matchMedia，系统偏好与偏好变化只能靠桩
  vi.stubGlobal(
    'matchMedia',
    (query: string) =>
      ({
        matches: options.systemDark === true,
        media: query,
        addEventListener: (_: string, listener: SystemChangeListener) => listeners.push(listener),
        removeEventListener: () => {}
      }) as unknown as MediaQueryList
  )

  vi.resetModules()
  const { useTheme, setRouteThemeColor } = await import('./use-theme')

  return {
    useTheme,
    setRouteThemeColor,
    emitSystemChange: (dark: boolean) => listeners.forEach((listener) => listener({ matches: dark }))
  }
}

const themeColor = () => document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.content

afterEach(() => {
  vi.unstubAllGlobals()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  document.documentElement.removeAttribute('style')
  document.querySelector('meta[name="theme-color"]')?.remove()
  delete document.documentElement.dataset.theme
})

describe('useTheme', () => {
  it('follows a dark system preference and drives the html flags plus browser chrome', async () => {
    const { useTheme } = await loadTheme({ systemDark: true })
    const { current, isDark, sync } = useTheme()
    sync()

    expect(current.value).toBe('dark')
    expect(isDark.value).toBe(true)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(themeColor()).toBe('#191c1e')
  })

  it('ignores a theme stored by an earlier version that offered a toggle', async () => {
    localStorage.setItem('resume-theme', 'dark')
    const { useTheme } = await loadTheme({ systemDark: false })
    const { current, sync } = useTheme()
    sync()

    expect(current.value).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('keeps following the system when its preference changes', async () => {
    const { useTheme, emitSystemChange } = await loadTheme()
    const { current, sync } = useTheme()
    sync()

    emitSystemChange(true)
    expect(current.value).toBe('dark')

    emitSystemChange(false)
    expect(current.value).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('lets the route theme color through in light mode and overrides it in dark mode', async () => {
    const light = await loadTheme()
    light.useTheme().sync()
    light.setRouteThemeColor('#ffffff')
    expect(themeColor()).toBe('#ffffff')

    const dark = await loadTheme({ systemDark: true })
    dark.useTheme().sync()
    dark.setRouteThemeColor('#ffffff')
    expect(themeColor()).toBe('#191c1e')
  })
})
