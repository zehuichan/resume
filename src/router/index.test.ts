import { createMemoryHistory, type RouteLocationNormalized } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { createResumeRouter, scrollBehavior } from './index'

const location = (hash: string) => ({ hash }) as RouteLocationNormalized

describe('resume router scrolling', () => {
  it('scrolls a section link like #/#projects to that section once the page has rendered', async () => {
    await expect(scrollBehavior(location('#projects'), location(''), null)).resolves.toEqual({
      el: '#projects',
      top: 16
    })
  })

  it('goes back to where the visitor was on back and forward, and to the top otherwise', () => {
    expect(scrollBehavior(location('#projects'), location(''), { left: 0, top: 420 })).toEqual({ left: 0, top: 420 })
    expect(scrollBehavior(location(''), location(''), null)).toEqual({ top: 0 })
  })
})

describe('resume router', () => {
  it('uses the mainstream resume as the default', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('exposes online resume content as a standalone route', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/online')
    expect(router.currentRoute.value.name).toBe('online')
  })

  it('redirects unknown paths to the mainstream resume', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/missing')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('redirects the removed ai-first route to the mainstream resume', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/ai-first')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('keeps the former classic route as a compatibility redirect', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/classic')
    expect(router.currentRoute.value.name).toBe('classic')
  })
})
