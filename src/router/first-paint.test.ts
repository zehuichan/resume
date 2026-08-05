import { afterEach, describe, expect, it, vi } from 'vitest'
import indexHtml from '../../index.html?raw'

const inlineScript = indexHtml.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1]

if (!inlineScript) {
  throw new Error('Expected an inline first-paint script in index.html')
}

const executeFirstPaintScript = new Function(inlineScript)

function runFirstPaintScript(hash: string): void {
  window.location.hash = hash
  delete document.documentElement.dataset.resume
  delete document.documentElement.dataset.theme
  executeFirstPaintScript()
}

afterEach(() => {
  vi.restoreAllMocks()
  window.location.hash = ''
  delete document.documentElement.dataset.resume
  delete document.documentElement.dataset.theme
})

describe('first-paint resume classification', () => {
  it.each([
    ['#/', 'classic'],
    ['#/classic', 'classic'],
    ['#/missing', 'classic'],
    ['#/ai-first', 'ai-first'],
    ['#/ai-first?print=1', 'ai-first'],
    ['#/ai-first/', 'ai-first'],
    ['#/ai-first/missing', 'classic']
  ])('classifies %s as %s', (hash, expectedVersion) => {
    runFirstPaintScript(hash)

    expect(document.documentElement.dataset.resume).toBe(expectedVersion)
  })

  it('uses the stable light theme for both resume pages', () => {
    runFirstPaintScript('#/')
    expect(document.documentElement.dataset.resume).toBe('classic')
    expect(document.documentElement.dataset.theme).toBe('light')

    runFirstPaintScript('#/ai-first?print=1')
    expect(document.documentElement.dataset.resume).toBe('ai-first')
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})
