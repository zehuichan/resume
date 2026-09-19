import { afterEach, describe, expect, it, vi } from 'vitest'
import type { useTheme as UseTheme } from './use-theme'

type SystemChangeListener = (event: { matches: boolean }) => void

/** 主题状态是模块级单例，每个用例都要拿到全新的模块实例 */
async function loadTheme(options: { systemDark?: boolean } = {}): Promise<{
  useTheme: typeof UseTheme
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
  const { useTheme } = await import('./use-theme')

  return {
    useTheme,
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
  it('follows the system preference when the visitor has not chosen a theme', async () => {
    const { useTheme } = await loadTheme({ systemDark: true })
    const { current, isDark, sync } = useTheme()
    sync()

    expect(current.value).toBe('dark')
    expect(isDark.value).toBe(true)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('prefers the stored choice over the system preference', async () => {
    localStorage.setItem('resume-theme', 'light')
    const { useTheme } = await loadTheme({ systemDark: true })
    const { current, sync } = useTheme()
    sync()

    expect(current.value).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists an explicit choice and drives the html flags plus browser chrome', async () => {
    const { useTheme } = await loadTheme()
    const { setTheme } = useTheme()

    setTheme('dark')

    expect(localStorage.getItem('resume-theme')).toBe('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(themeColor()).toBe('#15181d')
  })

  it('toggles between the two themes', async () => {
    const { useTheme } = await loadTheme()
    const { current, toggle, sync } = useTheme()
    sync()

    expect(current.value).toBe('light')
    toggle()
    expect(current.value).toBe('dark')
    toggle()
    expect(current.value).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('keeps following the system until the visitor picks a theme', async () => {
    const { useTheme, emitSystemChange } = await loadTheme()
    const { current, setTheme, sync } = useTheme()
    sync()

    emitSystemChange(true)
    expect(current.value).toBe('dark')

    setTheme('light')
    emitSystemChange(true)
    expect(current.value).toBe('light')
  })

  it('lets the route theme color through in light mode and overrides it in dark mode', async () => {
    const { useTheme } = await loadTheme()
    const { setRouteThemeColor } = await import('./use-theme')
    const { setTheme } = useTheme()

    setRouteThemeColor('#ffffff')
    expect(themeColor()).toBe('#ffffff')

    setTheme('dark')
    setRouteThemeColor('#ffffff')
    expect(themeColor()).toBe('#15181d')
  })
})
