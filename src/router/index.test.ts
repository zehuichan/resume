import { createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { createResumeRouter } from './index'

describe('resume router', () => {
  it('uses AI-First as the default and preserves the classic route', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/')
    expect(router.currentRoute.value.name).toBe('ai-first')

    await router.push('/classic')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('redirects unknown paths to AI-First', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/missing')
    expect(router.currentRoute.value.name).toBe('ai-first')
  })

  it('accepts the optional trailing slash on the classic route', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/classic/')
    expect(router.currentRoute.value.name).toBe('classic')
  })
})
