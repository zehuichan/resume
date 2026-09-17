import { createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { createResumeRouter } from './index'

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
