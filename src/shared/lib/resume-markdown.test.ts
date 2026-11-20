import { describe, expect, it } from 'vitest'
import { resume } from '../../views/classic/data'
import { buildResumeMarkdown } from './resume-markdown'
import { compactProjects, featuredProjects } from './resume-sections'

const now = new Date('2026-11-20T00:00:00+08:00')

describe('buildResumeMarkdown', () => {
  it('lists the sections in the same order as the resume page', () => {
    const headings = buildResumeMarkdown(resume, now)
      .split('\n')
      .filter((line) => line.startsWith('## '))

    expect(headings).toEqual([
      '## 个人优势',
      '## 专业技能',
      '## 工作经历',
      '## 项目经历',
      '## 其他项目',
      '## 开源经历',
      '## 教育背景'
    ])
  })

  it('carries every company, featured project and compact project shown on the page', () => {
    const markdown = buildResumeMarkdown(resume, now)

    for (const company of resume.companies) expect(markdown).toContain(`### ${company.name}`)
    for (const project of featuredProjects(resume)) expect(markdown).toContain(project.name)
    for (const project of compactProjects(resume)) expect(markdown).toContain(project.name)
    expect(markdown).toContain('11 年+ 工作经验')
  })

  it('turns ==highlight== into bold and keeps links clickable', () => {
    const markdown = buildResumeMarkdown(resume, now)

    expect(markdown).not.toMatch(/==/)
    expect(markdown).toContain('**20 人**')
    expect(markdown).toContain('### [Tenon 低代码画布引擎](https://tenon.gbuilderchina.com/)')
  })

  it('gives archived projects no entry of their own, as the page does', () => {
    const markdown = buildResumeMarkdown(resume, now)
    const archived = resume.moreProjects.projects.filter((p) => p.archived)

    expect(archived.length).toBeGreaterThan(0)
    for (const project of archived) {
      expect(markdown).not.toContain(`### ${project.name}`)
      expect(markdown).not.toContain(`- **${project.name}**`)
    }
  })
})
