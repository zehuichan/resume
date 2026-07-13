import { describe, expect, it } from 'vitest'
import { aiResume } from './resume'

describe('aiResume', () => {
  it('uses the approved Vibe-Coding positioning and evidence', () => {
    expect(aiResume.profile.eyebrow).toBe('VIBE-CODING')
    expect(aiResume.profile.title).toBe('前端负责人｜把 AI 产码跑进真实项目')
    expect(aiResume.profile.summary).toContain('Vibe-Coding')
    expect(aiResume.metrics.map((metric) => metric.value)).toContain('6')
    expect(aiResume.metrics.map((metric) => metric.value)).toContain('7')
    expect(aiResume.cases[0]?.name).toBe('GeorgeGroup Agent Skills · AI 编码基建')
    expect(aiResume.capabilities[0]?.label).toBe('Vibe-Coding')
    expect(aiResume.closing).toContain('边界')
    expect(aiResume.closing).not.toMatch(/Human sets the boundary/i)
  })

  it('does not overclaim unsupported experience', () => {
    const content = JSON.stringify(aiResume)

    expect(content).not.toMatch(/React.{0,12}(生产|项目|实战)/i)
    expect(content).not.toMatch(/精通性能|性能专家|深入研究浏览器/)
    expect(content).not.toContain('4–6')
  })

  it('keeps human and agent responsibilities explicit', () => {
    expect(aiResume.pipeline.some((stage) => stage.owner === 'Human')).toBe(true)
    expect(aiResume.pipeline.some((stage) => stage.owner === 'Agent')).toBe(true)
    expect(aiResume.pipeline.some((stage) => stage.owner === 'System')).toBe(true)
  })
})
