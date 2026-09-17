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
    ['#/ai-first', 'classic'],
    ['#/ai-first?print=1', 'classic'],
    ['#/online', 'classic']
  ])('classifies %s as %s', (hash, expectedVersion) => {
    runFirstPaintScript(hash)

    expect(document.documentElement.dataset.resume).toBe(expectedVersion)
  })

  it('uses the stable light theme', () => {
    runFirstPaintScript('#/')
    expect(document.documentElement.dataset.resume).toBe('classic')
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})
