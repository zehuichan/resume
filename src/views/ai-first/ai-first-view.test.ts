import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { aiResume } from './data/resume'
import AiFirstResumeView from './index.vue'

describe('AiFirstResumeView', () => {
  it('mirrors the recruitment layout with Agent career content', () => {
    const wrapper = mount(AiFirstResumeView)

    expect(wrapper.get('h1').text()).toBe('陈泽辉')
    expect(wrapper.text()).toContain('Agent 应用开发工程师')
    expect(wrapper.text()).toContain('个人优势')
    expect(wrapper.text()).toContain('专业技能')
    expect(wrapper.text()).toContain('工作经历')
    expect(wrapper.text()).toContain('项目经历')
    expect(wrapper.text()).toContain('GeorgeGroup Agent Skills · AI 编码基建')
    expect(wrapper.text()).toContain('敬城集团前端架构体系路线图')
    expect(wrapper.text()).toContain('教育背景')
    expect(wrapper.text()).not.toContain('CONTROL PLANE')
    expect(wrapper.text()).not.toContain('Vibe-Coding 怎么跑')
  })

  it('keeps an accessible avatar name when the profile image fails', async () => {
    const wrapper = mount(AiFirstResumeView)

    await wrapper.get('img').trigger('error')

    expect(wrapper.text()).toContain(aiResume.profile.name.charAt(0))
  })

  it('reuses the shared print stylesheet with a 9pt floor', async () => {
    const { readFileSync } = await vi.importActual<{
      readFileSync(path: string, encoding: 'utf8'): string
    }>('node:fs')
    const aiCss = readFileSync('src/views/ai-first/styles/resume.css', 'utf8')
    const printCss = readFileSync('src/views/classic/styles/resume.css', 'utf8').split('@media print').at(-1) ?? ''

    expect(aiCss).toContain('../../classic/styles/resume.css')
    expect(printCss).toContain('--classic-print-min-font-size: 9pt;')
    expect(printCss).toContain('.classic-resume .tech')
  })

  it('keeps the toolbar focused on PDF export and the profile link', () => {
    const wrapper = mount(AiFirstResumeView)

    expect(wrapper.get('button[title="打印 / 导出 PDF"]').text()).toContain('导出 PDF')
    expect(wrapper.get('a[title="GitHub"]').attributes('href')).toBe('https://github.com/zehuichan')
    expect(wrapper.find('button[aria-label*="主题"]').exists()).toBe(false)
  })
})
