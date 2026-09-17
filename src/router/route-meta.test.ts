import { describe, expect, it } from 'vitest'
import { applyRouteMeta } from './route-meta'

describe('applyRouteMeta', () => {
  it('updates title, description, theme color, and resume namespace', () => {
    applyRouteMeta({
      title: '陈泽辉 · 前端负责人',
      description: '陈泽辉 · 前端负责人简历',
      themeColor: '#ffffff',
      resumeVersion: 'classic'
    })

    expect(document.title).toBe('陈泽辉 · 前端负责人')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      '陈泽辉 · 前端负责人简历'
    )
    expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#ffffff')
    expect(document.documentElement.dataset.resume).toBe('classic')
  })
})
