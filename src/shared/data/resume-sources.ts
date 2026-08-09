import type { Resume } from '../../views/classic/types'
import { classicOnline, resume as classicResume } from '../../views/classic/data'
import { aiOnline, aiResume } from '../../views/ai-first/data'
import type { OnlineExtras } from '../types/online'

export type ResumeVersion = 'classic' | 'ai-first'

export interface ResumeSource {
  version: ResumeVersion
  label: string
  resume: Resume
  extras: OnlineExtras
}

const sources: Record<ResumeVersion, ResumeSource> = {
  classic: {
    version: 'classic',
    label: '招聘版',
    resume: classicResume,
    extras: classicOnline
  },
  'ai-first': {
    version: 'ai-first',
    label: 'Agent 版',
    resume: aiResume,
    extras: aiOnline
  }
}

export function resolveResumeSource(routeName: string | symbol | null | undefined): ResumeSource {
  if (routeName === 'ai-first') return sources['ai-first']
  return sources.classic
}
