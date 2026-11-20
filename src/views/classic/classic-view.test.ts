import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import compactProjectItemSource from './components/compact-project-item.vue?raw'
import projectItemSource from './components/project-item.vue?raw'
import resumeHeaderSource from './components/resume-header.vue?raw'
import richTextSource from './components/rich-text.vue?raw'
import sectionHeaderSource from './components/section-header.vue?raw'
import { resume } from './data'
import ClassicResumeView from './index.vue'
import classicViewSource from './index.vue?raw'

const classicVueSources = [
  classicViewSource,
  compactProjectItemSource,
  projectItemSource,
  resumeHeaderSource,
  richTextSource,
  sectionHeaderSource
].join('\n')

describe('ClassicResumeView', () => {
  it('preserves the current resume identity and representative project', () => {
    const wrapper = mount(ClassicResumeView)

    expect(wrapper.get('h1').text()).toBe('陈泽辉')
    expect(wrapper.text()).toContain('敬城集团前端基建主链路')
    expect(wrapper.text()).toContain('Tenon 低代码画布引擎')
    expect(wrapper.get('a[href="https://tenon.gbuilderchina.com/"]').text()).toBe('Tenon 低代码画布引擎')
    expect(wrapper.get('a[href="https://tenon.gbuilderchina.com/"]').text()).toBe('Tenon 低代码画布引擎')
  })

  it('lists keywords under each company and a learning row on featured projects', () => {
    const wrapper = mount(ClassicResumeView)
    const text = wrapper.text()

    expect(text).toContain('关键词国际物流 · 订舱')
    const featured = resume.experience.projects.filter((p) => p.featured)
    expect(featured.every((p) => p.learning)).toBe(true)
    expect(text.split('项目收获').length - 1).toBe(featured.length)
  })

  it('gives every section a fixed link that points at its own id', () => {
    const wrapper = mount(ClassicResumeView)
    const sections = wrapper.findAll('section[id]')

    expect(sections.map((s) => s.attributes('id'))).toEqual([
      'summary',
      'skills',
      'experience',
      'projects',
      'more-projects',
      'open-source',
      'education'
    ])
    for (const section of sections) {
      expect(section.get('h2 a').attributes('href')).toBe(`#/#${section.attributes('id')}`)
    }
  })

  it('reserves space below the sheet for the bottom dock', () => {
    const wrapper = mount(ClassicResumeView)

    expect(wrapper.get('.classic-resume').classes()).toEqual(expect.arrayContaining(['pb-24', 'sm:pb-24']))
  })

  it('enforces the 9pt minimum for compact print text', async () => {
    const { readFileSync } = await vi.importActual<{
      readFileSync(path: string, encoding: 'utf8'): string
    }>('node:fs')
    const printCss = readFileSync('src/views/classic/styles/resume.css', 'utf8').split('@media print').at(-1) ?? ''

    expect(printCss).toContain('--classic-print-min-font-size: 9pt;')
    expect(printCss).toContain("[class~='text-[9.5px]']")
    expect(printCss).toContain('.classic-resume .tech')
  })

  it('repaints the sheet in dark mode while keeping print output on light paper', async () => {
    const { readFileSync } = await vi.importActual<{
      readFileSync(path: string, encoding: 'utf8'): string
    }>('node:fs')
    const classicCss = readFileSync('src/views/classic/styles/resume.css', 'utf8')
    const darkBlock = classicCss.match(/\[data-theme='dark'\]\s*\{([^}]*)\}/)?.[1] ?? ''
    const printCss = classicCss.split('@media print').at(-1) ?? ''

    expect(darkBlock).toContain('color-scheme: dark;')
    for (const token of ['paper', 'paper-soft', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-deep', 'line']) {
      expect(darkBlock).toContain(`--color-classic-${token}:`)
    }
    expect(darkBlock).toContain('--sheet-bg:')

    expect(printCss).toContain('color-scheme: light !important;')
    expect(printCss).toContain('--color-classic-ink: #111827 !important;')
    expect(printCss).toContain('background: #ffffff !important;')
  })

  it('isolates classic selectors, print rules, and Tailwind tokens from other views', async () => {
    const { readFileSync } = await vi.importActual<{
      readFileSync(path: string, encoding: 'utf8'): string
    }>('node:fs')
    const classicCss = readFileSync('src/views/classic/styles/resume.css', 'utf8')

    expect(classicCss).not.toMatch(
      /(?:^|[},])\s*\.(?:sheet|hl|tech|reveal|no-print|break-avoid|print-compact)(?=[\s:{,.>+~])/m
    )
    expect(classicCss).toMatch(/\.classic-resume\s+\*/)
    expect(classicCss).toContain('@keyframes classic-resume-rise')
    expect(classicCss).not.toMatch(/@keyframes\s+rise\b/)
    expect(classicCss).toContain('@page classic-resume')
    expect(classicCss).not.toMatch(/@page\s*\{/)
    expect(classicCss).toMatch(/\.classic-resume\s*\{\s*page:\s*classic-resume;/)
    expect(classicCss).not.toMatch(
      /--(?:color|font)-(?:paper(?:-soft)?|ink(?:-soft|-faint)?|accent(?:-deep)?|seal(?:-deep)?|line|display|sans|mono)\b/
    )
    expect(classicCss).toContain('--color-*: initial;')
    expect(classicCss).toContain('--font-*: initial;')
    expect(classicCss).toContain('--color-classic-paper:')
    expect(classicCss).toContain('--font-classic-sans:')
    expect(classicVueSources).not.toMatch(
      /(?:bg|text|border|font)-(?:paper(?:-soft)?|ink(?:-soft|-faint)?|accent(?:-deep)?|seal(?:-deep)?|line|display|sans|mono)\b/
    )
    expect(classicVueSources).toContain('text-classic-ink')
  })
})
