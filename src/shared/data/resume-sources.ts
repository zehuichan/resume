import type { Resume } from '../../views/classic/types'
import { classicOnline, resume as classicResume } from '../../views/classic/data'
import type { OnlineExtras } from '../types/online'

export interface ResumeSource {
  label: string
  resume: Resume
  extras: OnlineExtras
}

export const classicSource: ResumeSource = {
  label: '招聘版',
  resume: classicResume,
  extras: classicOnline
}

export function resolveResumeSource(): ResumeSource {
  return classicSource
}
