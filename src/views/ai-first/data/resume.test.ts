import { describe, expect, it } from 'vitest'
import type { Project } from '../../classic/types'
import { aiResume } from './resume'

describe('aiResume', () => {
  it('uses Agent application engineer positioning and evidence', () => {
    expect(aiResume.profile.title).toBe('Agent 应用开发工程师')
    expect(aiResume.profile.summary).toContain('Agent 应用开发')
    expect(aiResume.skills[0]?.label).toBe('Agent 工程')
    expect(aiResume.experience.projects[0]?.name).toBe('GeorgeGroup Agent Skills · AI 编码基建')
    expect(aiResume.experience.projects.filter((project: Project) => project.featured)).toHaveLength(3)
    expect(aiResume.closing).toContain('Agent 应用开发工程师')
  })

  it('does not overclaim unsupported experience', () => {
    const content = JSON.stringify(aiResume)

    expect(content).not.toMatch(/React.{0,12}(生产|项目|实战)/i)
    expect(content).not.toMatch(/精通性能|性能专家|深入研究浏览器/)
    expect(content).not.toContain('4–6')
  })

  it('keeps human and agent responsibilities explicit in Agent projects', () => {
    const agentProject = aiResume.experience.projects.find((project: Project) =>
      project.name.includes('Agent Skills'),
    )

    expect(agentProject?.action).toContain('人定边界')
    expect(agentProject?.action).toContain('Agent 执行')
    expect(agentProject?.result).toContain('分钟级生成')
  })

  it('links Tenon to the official site', () => {
    const tenon = aiResume.experience.projects.find((project: Project) => project.name.includes('Tenon'))

    expect(tenon?.href).toBe('https://tenon.gbuilderchina.com/')
    expect(tenon?.result).toContain('https://tenon.gbuilderchina.com/')
  })
})
