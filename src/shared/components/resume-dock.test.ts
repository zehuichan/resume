import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createMemoryHistory } from 'vue-router'
import { createResumeRouter } from '../../router'
import ResumeDock from './resume-dock.vue'

async function mountDock(path = '/') {
  const router = createResumeRouter(createMemoryHistory())
  await router.push(path)
  await router.isReady()

  return { router, wrapper: mount(ResumeDock, { global: { plugins: [router] } }) }
}

type DockWrapper = Awaited<ReturnType<typeof mountDock>>['wrapper']

const themeButton = (wrapper: DockWrapper) => wrapper.get('button[aria-pressed]')

afterEach(() => {
  vi.restoreAllMocks()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  delete document.documentElement.dataset.theme
})

describe('ResumeDock', () => {
  it('exposes a theme toggle that flips the html dark flags', async () => {
    const { wrapper } = await mountDock()

    expect(themeButton(wrapper).attributes('aria-label')).toBe('切换到暗色主题')
    expect(themeButton(wrapper).attributes('aria-pressed')).toBe('false')

    await themeButton(wrapper).trigger('click')

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('resume-theme')).toBe('dark')
    expect(themeButton(wrapper).attributes('aria-label')).toBe('切换到亮色主题')
    expect(themeButton(wrapper).attributes('aria-pressed')).toBe('true')

    await themeButton(wrapper).trigger('click')

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('marks the current view among the version links', async () => {
    const { wrapper } = await mountDock('/online')
    const links = wrapper.findAll('nav a')

    expect(links.map((link) => link.text())).toEqual(['简历', '线上版'])
    expect(links[0].attributes('aria-current')).toBeUndefined()
    expect(links[1].attributes('aria-current')).toBe('page')
  })

  it('leaves printing to the browser shortcut', async () => {
    const { router, wrapper } = await mountDock('/')

    expect(wrapper.text()).not.toContain('导出 PDF')

    await router.push('/online')

    expect(wrapper.text()).not.toContain('导出 PDF')
  })

  it('stays out of print output', async () => {
    const { wrapper } = await mountDock()

    expect(wrapper.get('[data-slot="resume-dock"]').classes()).toContain('print:hidden')
  })
})
