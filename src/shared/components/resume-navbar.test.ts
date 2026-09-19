import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { createMemoryHistory } from 'vue-router'
import { createResumeRouter } from '../../router'
import ResumeNavbar from './resume-navbar.vue'

async function mountNavbar() {
  const router = createResumeRouter(createMemoryHistory())
  await router.push('/')
  await router.isReady()

  return mount(ResumeNavbar, { global: { plugins: [router] } })
}

const themeButton = (wrapper: Awaited<ReturnType<typeof mountNavbar>>) =>
  wrapper.get('button[aria-pressed]')

afterEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  delete document.documentElement.dataset.theme
})

describe('ResumeNavbar', () => {
  it('exposes a theme toggle that flips the html dark flags', async () => {
    const wrapper = await mountNavbar()

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

  it('keeps the version links alongside the toggle', async () => {
    const wrapper = await mountNavbar()
    const links = wrapper.findAll('a')

    expect(links.map((link) => link.text())).toEqual(['简历', '线上版'])
    expect(links[0].attributes('aria-current')).toBe('page')
  })
})
