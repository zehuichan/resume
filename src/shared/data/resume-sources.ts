import type { Resume } from '../../views/classic/types'
import { classicOnline, resume as classicResume } from '../../views/classic/data'
import type { OnlineExtras } from '../types/online'

export interface ResumeSource {
  resume: Resume
  extras: OnlineExtras
}

export const classicSource: ResumeSource = {
  resume: classicResume,
  extras: classicOnline
}

export function resolveResumeSource(): ResumeSource {
  return classicSource
}
