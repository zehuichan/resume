import { afterEach, describe, expect, it, vi } from 'vitest'
import indexHtml from '../../index.html?raw'

const inlineScript = indexHtml.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1]

if (!inlineScript) {
  throw new Error('Expected an inline first-paint script in index.html')
}

const executeFirstPaintScript = new Function(inlineScript)

/** jsdom 不实现 matchMedia，系统偏好只能靠桩 */
function stubSystemTheme(dark: boolean): void {
  vi.stubGlobal('matchMedia', (query: string) => ({ matches: dark, media: query }) as MediaQueryList)
}

function runFirstPaintScript(hash: string): void {
  window.location.hash = hash
  delete document.documentElement.dataset.resume
  delete document.documentElement.dataset.theme
  document.documentElement.classList.remove('dark')
  executeFirstPaintScript()
}

afterEach(() => {
  vi.unstubAllGlobals()
  window.location.hash = ''
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  document.documentElement.removeAttribute('style')
  document.querySelector('meta[name="theme-color"]')?.remove()
  delete document.documentElement.dataset.resume
  delete document.documentElement.dataset.theme
})

describe('first-paint resume classification', () => {
  it.each([
    ['#/', 'classic'],
    ['#/classic', 'classic'],
    ['#/missing', 'classic'],
    ['#/ai-first', 'classic'],
    ['#/ai-first?print=1', 'classic'],
    ['#/online', 'classic']
  ])('classifies %s as %s', (hash, expectedVersion) => {
    runFirstPaintScript(hash)

    expect(document.documentElement.dataset.resume).toBe(expectedVersion)
  })
})

describe('first-paint web fonts', () => {
  it('loads the Google Fonts stylesheet without blocking the first paint', () => {
    const doc = new DOMParser().parseFromString(indexHtml, 'text/html')
    const fonts = [...doc.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')].filter((link) =>
      link.getAttribute('href')?.startsWith('https://fonts.googleapis.com/')
    )

    expect(fonts).toHaveLength(1)
    expect(fonts[0]!.getAttribute('media')).toBe('print')
    expect(fonts[0]!.getAttribute('onload')).toBe("this.media='all'")
  })
})

describe('first-paint theme resolution', () => {
  it('falls back to light when nothing is stored and the system is light', () => {
    stubSystemTheme(false)
    runFirstPaintScript('#/')

    expect(document.documentElement.dataset.resume).toBe('classic')
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('follows the system preference when nothing is stored', () => {
    stubSystemTheme(true)
    runFirstPaintScript('#/')

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.style.colorScheme).toBe('dark')
  })

  it('ignores a theme stored by an earlier version that offered a toggle', () => {
    localStorage.setItem('resume-theme', 'dark')
    stubSystemTheme(false)
    runFirstPaintScript('#/')

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('paints the browser chrome with the dark surface color', () => {
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = '#ffffff'
    document.head.append(meta)

    stubSystemTheme(true)
    runFirstPaintScript('#/')

    expect(meta.content).toBe('#191c1e')
  })
})
