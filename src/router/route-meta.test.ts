import { describe, expect, it } from 'vitest'
import { applyRouteMeta } from './route-meta'

describe('applyRouteMeta', () => {
  it('updates title, description, theme color, and resume namespace', () => {
    applyRouteMeta({
      title: 'AI Resume',
      description: 'AI-First description',
      themeColor: '#070b09',
      resumeVersion: 'ai-first'
    })

    expect(document.title).toBe('AI Resume')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('AI-First description')
    expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#070b09')
    expect(document.documentElement.dataset.resume).toBe('ai-first')
  })
})
