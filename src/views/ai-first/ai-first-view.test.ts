import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { getExperienceYears } from '../../shared/utils/experience'
import AiRichText from './components/ai-rich-text.vue'
import { aiResume } from './data/resume'
import AiFirstResumeView from './index.vue'

describe('AiFirstResumeView', () => {
  it('renders the approved hero, pipeline, cases, and classic evidence', () => {
    const wrapper = mount(AiFirstResumeView)
    const metrics = wrapper.findAll('.ai-metric')

    expect(wrapper.get('[data-testid="ai-hero"]').text()).toContain(
      '前端负责人｜把 AI 产码跑进真实项目',
    )
    expect(metrics).toHaveLength(4)
    expect(metrics[0].text()).toContain(
      `${getExperienceYears(aiResume.profile.experienceStartYear)}年+`,
    )
    expect(metrics[0].text()).toContain(`自 ${aiResume.profile.experienceStartYear} 年`)
    expect(wrapper.get('[data-testid="ai-pipeline"]').text()).toContain('Human')
    expect(wrapper.get('[data-testid="ai-pipeline"]').text()).toContain('Agent')
    expect(wrapper.findAll('[data-testid="ai-case"]')).toHaveLength(3)
    expect(wrapper.text()).toContain('日均发行 10000+')
    expect(wrapper.text()).not.toContain('CONTROL PLANE')
    expect(wrapper.text()).not.toContain('ACP://')
    expect(wrapper.text()).not.toContain('SYS.01')
    expect(wrapper.text()).not.toContain('MISSION RECORDS')
    expect(wrapper.text()).toContain('Vibe-Coding 怎么跑')
    expect(wrapper.text()).toContain('代表案例')
  })

  it('keeps an accessible avatar name when the profile image fails', async () => {
    const wrapper = mount(AiFirstResumeView)

    await wrapper.get('.ai-avatar').trigger('error')

    const fallback = wrapper.get('.ai-avatar-fallback')
    expect(fallback.attributes('role')).toBe('img')
    expect(fallback.attributes('aria-label')).toBe(`${aiResume.profile.name}的头像`)
  })

  it('enforces the 9pt minimum for compact print text', async () => {
    const { readFileSync } = await vi.importActual<{
      readFileSync(path: string, encoding: 'utf8'): string
    }>('node:fs')
    const printCss = readFileSync('src/views/ai-first/styles/resume.css', 'utf8').split('@media print').at(-1) ?? ''

    expect(printCss).toContain('--ai-print-min-font-size: 9pt;')
    expect(printCss).toContain('.ai-pipeline-stage__owner,')
    expect(printCss).toContain('.ai-case-flow__label,')
    expect(printCss).not.toMatch(/font-size:\s*[0-8](?:\.\d+)?pt/)
    expect(printCss).toMatch(/\.ai-footer\s*\{\s*margin-top:\s*3mm;/)
  })

  it('toggles data-theme between light and dark from the toolbar', async () => {
    localStorage.removeItem('resume-theme')
    document.documentElement.dataset.theme = 'light'
    const wrapper = mount(AiFirstResumeView)

    const toggle = wrapper.get('button[aria-label="切换到暗黑主题"]')
    await toggle.trigger('click')

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('resume-theme')).toBe('dark')

    await wrapper.get('button[aria-label="切换到亮色主题"]').trigger('click')
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})

describe('AiRichText', () => {
  it('renders approved rich-text tokens without raw markup', () => {
    const wrapper = mount(AiRichText, {
      props: {
        text: '使用 **人工复核**、==质量门禁== 和 `vue-tsc`',
      },
    })

    expect(wrapper.get('.ai-rich-text__strong').text()).toBe('人工复核')
    expect(wrapper.get('.ai-rich-text__highlight').text()).toBe('质量门禁')
    expect(wrapper.get('.ai-rich-text__code').text()).toBe('vue-tsc')
    expect(wrapper.text()).not.toContain('**')
    expect(wrapper.text()).not.toContain('==')
    expect(wrapper.text()).not.toContain('`')
  })
})
