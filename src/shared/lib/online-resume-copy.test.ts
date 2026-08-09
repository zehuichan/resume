import { describe, expect, it } from 'vitest'
import { classicOnline, resume as classicResume } from '../../views/classic/data'
import { aiOnline, aiResume } from '../../views/ai-first/data'
import {
  buildOnlineResumeBlocks,
  getProjectSortValue,
  stripResumeMarkup
} from './online-resume-copy'

describe('stripResumeMarkup', () => {
  it('strips highlight, bold, and inline code markers', () => {
    expect(stripResumeMarkup('主导==前端基建主链路==，用 `vue3` 与 **Agent Skills**')).toBe(
      '主导前端基建主链路，用 vue3 与 Agent Skills'
    )
  })
})

describe('getProjectSortValue', () => {
  it('prefers sortDate, otherwise period start month', () => {
    expect(
      getProjectSortValue({
        name: 'a',
        kind: 'k',
        period: '2017.08 - 2019.03',
        role: 'r',
        scene: 's',
        action: 'a',
        result: 'r',
        sortDate: '2019.03'
      })
    ).toBe(201903)

    expect(
      getProjectSortValue({
        name: 'b',
        kind: 'k',
        period: '2025.09 - 至今',
        role: 'r',
        scene: 's',
        action: 'a',
        result: 'r'
      })
    ).toBe(202509)
  })
})

describe('buildOnlineResumeBlocks', () => {
  it('builds five BOSS-ordered blocks for classic resume', () => {
    const copy = buildOnlineResumeBlocks(classicResume, classicOnline)
    expect(copy.blocks.map((b) => b.kind)).toEqual([
      'advantage',
      'expectations',
      'companies',
      'projects',
      'education'
    ])
    expect(copy.projectCount).toBe(
      classicResume.experience.projects.length + classicResume.moreProjects.projects.length
    )
    expect(copy.companyCount).toBe(classicResume.companies.length)
  })

  it('formats project content and result without markup', () => {
    const copy = buildOnlineResumeBlocks(classicResume, classicOnline)
    const projects = copy.blocks.find((b) => b.kind === 'projects')
    expect(projects?.kind).toBe('projects')
    if (projects?.kind !== 'projects') return

    const tenon = projects.items.find((p) => p.name.includes('Tenon'))
    expect(tenon).toBeTruthy()
    expect(tenon!.content.text).toMatch(/^1\. /)
    expect(tenon!.content.text).toMatch(/\n2\. /)
    expect(tenon!.content.text).not.toMatch(/==|`|\*\*/)
    expect(tenon!.result.text).toMatch(/^1\. /)
    expect(tenon!.result.text).not.toMatch(/==|`|\*\*/)
    expect(tenon!.result.text).toContain('https://tenon.gbuilderchina.com/')
  })

  it('merges company onlineName and body by short name', () => {
    const copy = buildOnlineResumeBlocks(classicResume, classicOnline)
    const companies = copy.blocks.find((b) => b.kind === 'companies')
    expect(companies?.kind).toBe('companies')
    if (companies?.kind !== 'companies') return

    const jingcheng = companies.items.find((c) => c.name === '敬城集团')
    expect(jingcheng?.onlineName).toBe('佛山敬城投资管理有限公司')
    expect(jingcheng?.missing).toBe(false)
    expect(jingcheng?.content?.text).toContain('前端负责人')
    expect(jingcheng?.result?.text).toContain('21')
  })

  it('marks companies without body as missing', () => {
    const copy = buildOnlineResumeBlocks(classicResume, {
      expectations: [],
      companies: [{ name: '敬城集团', onlineName: '佛山敬城投资管理有限公司' }]
    })
    const companies = copy.blocks.find((b) => b.kind === 'companies')
    if (companies?.kind !== 'companies') return
    const missing = companies.items.filter((c) => c.name !== '敬城集团')
    expect(missing.every((c) => c.missing)).toBe(true)
  })

  it('builds non-empty advantage and education for both versions', () => {
    for (const [resume, extras] of [
      [classicResume, classicOnline],
      [aiResume, aiOnline]
    ] as const) {
      const copy = buildOnlineResumeBlocks(resume, extras)
      const advantage = copy.blocks.find((b) => b.kind === 'advantage')
      const education = copy.blocks.find((b) => b.kind === 'education')
      expect(advantage?.kind).toBe('advantage')
      expect(education?.kind).toBe('education')
      if (advantage?.kind === 'advantage') {
        expect(advantage.field.text.length).toBeGreaterThan(20)
        expect(advantage.field.text).not.toMatch(/==|`|\*\*/)
      }
      if (education?.kind === 'education') {
        expect(education.field.text).toContain('广东外语外贸大学')
      }
    }
  })

  it('lists all projects newest-first for ai-first', () => {
    const copy = buildOnlineResumeBlocks(aiResume, aiOnline)
    expect(copy.projectCount).toBe(
      aiResume.experience.projects.length + aiResume.moreProjects.projects.length
    )
    const projects = copy.blocks.find((b) => b.kind === 'projects')
    if (projects?.kind !== 'projects') return
    expect(projects.items[0]?.period).toMatch(/2026\.07|2025\.09/)
  })
})
