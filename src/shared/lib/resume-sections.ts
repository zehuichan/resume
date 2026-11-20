import type { Metric, Profile, Project, Resume } from '../../views/classic/types'
import { getExperienceYears } from '../utils/experience'
import { getProjectSortValue } from './online-resume-copy'

/** 页头规格行：「N 年+ 工作经验 · 城市 · 学历 · 到岗」 */
export function specLine(profile: Profile, now: Date = new Date()): string {
  return [`${getExperienceYears(profile.experienceStartYear, now)} 年+ 工作经验`, ...profile.meta].join(' · ')
}

/** 页头数字卡：首张「N 年+」按 experienceStartYear 计算，其余来自 resume.metrics */
export function resumeMetrics(resume: Resume, now: Date = new Date()): Metric[] {
  return [
    {
      value: String(getExperienceYears(resume.profile.experienceStartYear, now)),
      unit: '年+',
      label: '前端研发经验'
    },
    ...resume.metrics
  ]
}

export function featuredProjects(resume: Resume): Project[] {
  return resume.experience.projects.filter((p) => p.featured)
}

/** 「其他项目」：archived 的已折进对应公司的业绩行，不再单独列出；按时间倒序 */
export function compactProjects(resume: Resume): Project[] {
  return [...resume.experience.projects, ...resume.moreProjects.projects]
    .filter((p) => !p.featured && !p.archived)
    .sort((a, b) => getProjectSortValue(b) - getProjectSortValue(a))
}
