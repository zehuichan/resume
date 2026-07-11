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
    ['#/classic', 'classic'],
    ['#/classic?print=1', 'classic'],
    ['#/classic/', 'classic'],
    ['#/classic/?print=1', 'classic'],
    ['#/classical', 'ai-first'],
    ['#/classic/missing', 'ai-first'],
    ['#/missing', 'ai-first']
  ])('classifies %s as %s', (hash, expectedVersion) => {
    runFirstPaintScript(hash)

    expect(document.documentElement.dataset.resume).toBe(expectedVersion)
  })

  it('restores the saved theme only for an exact classic hash path', () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('dark')

    runFirstPaintScript('#/classical')
    expect(getItem).not.toHaveBeenCalled()
    expect(document.documentElement.dataset.theme).toBeUndefined()

    runFirstPaintScript('#/classic?print=1')
    expect(getItem).toHaveBeenCalledWith('resume-theme')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })
})
