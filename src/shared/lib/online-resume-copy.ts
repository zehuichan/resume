import type { Company, Education, Project, Resume } from '../../views/classic/types'
import type { OnlineCompanyBody, OnlineExpectation, OnlineExtras } from '../types/online'

export interface CopyField {
  label: string
  text: string
  /** 供角标展示的字符数 */
  charCount: number
}

export interface AdvantageBlock {
  kind: 'advantage'
  title: string
  field: CopyField
}

export interface ExpectationsBlock {
  kind: 'expectations'
  title: string
  items: OnlineExpectation[]
}

export interface CompanyCopyCard {
  name: string
  onlineName: string
  role: string
  period: string
  department: string
  missing: boolean
  content?: CopyField
  result?: CopyField
}

export interface CompaniesBlock {
  kind: 'companies'
  title: string
  items: CompanyCopyCard[]
}

export interface ProjectCopyCard {
  name: string
  role: string
  period: string
  kind: string
  content: CopyField
  result: CopyField
}

export interface ProjectsBlock {
  kind: 'projects'
  title: string
  items: ProjectCopyCard[]
}

export interface EducationBlock {
  kind: 'education'
  title: string
  items: Education[]
  field: CopyField
}

export type OnlineResumeBlock =
  | AdvantageBlock
  | ExpectationsBlock
  | CompaniesBlock
  | ProjectsBlock
  | EducationBlock

export interface OnlineResumeCopy {
  projectCount: number
  companyCount: number
  blocks: OnlineResumeBlock[]
}

/** 剥掉简历展示用标记：==高亮==、**加粗**、行内 `code` */
export function stripResumeMarkup(text: string): string {
  return text
    .replace(/==([^=]+)==/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[ \t]+\n/g, '\n')
    .trim()
}

function numbered(lines: string[]): string {
  return lines.map((line, i) => `${i + 1}. ${line}`).join('\n')
}

function toField(label: string, text: string): CopyField {
  return { label, text, charCount: text.length }
}

/** 从 period / sortDate 提取用于倒序的 YYYYMM；解析失败返回 0 */
export function getProjectSortValue(project: Project): number {
  const dateText = project.sortDate ?? project.period.split('-')[0]?.trim() ?? project.period
  const match = dateText.match(/(\d{4})\.(\d{2})/)
  if (!match) return 0
  return Number(match[1]) * 100 + Number(match[2])
}

function collectProjects(resume: Resume): Project[] {
  return [...resume.experience.projects, ...resume.moreProjects.projects].sort(
    (a, b) => getProjectSortValue(b) - getProjectSortValue(a)
  )
}

function splitResultSentences(result: string): string[] {
  const cleaned = stripResumeMarkup(result)
  const parts = cleaned
    .split(/(?<=[。；;])\s*/)
    .map((s) => s.trim())
    .filter(Boolean)
  return parts.length > 0 ? parts : [cleaned]
}

function buildAdvantage(resume: Resume): AdvantageBlock {
  const summary = stripResumeMarkup(resume.profile.summary)
  const skills = resume.skills
    .map((s, i) => `${i + 1}. ${stripResumeMarkup(s.label)}：${stripResumeMarkup(s.body)}`)
    .join('\n')
  const text = `${summary}\n\n${skills}`
  return {
    kind: 'advantage',
    title: '个人优势',
    field: toField('个人优势', text)
  }
}

function buildCompanies(companies: Company[], extras: OnlineExtras): CompaniesBlock {
  const byName = new Map(extras.companies.map((c) => [c.name, c]))

  const items: CompanyCopyCard[] = companies.map((company) => {
    const body: OnlineCompanyBody | undefined = byName.get(company.name)
    const onlineName = body?.onlineName?.trim() || company.name
    const contentLines = body?.content?.map(stripResumeMarkup).filter(Boolean) ?? []
    const resultLines = body?.result?.map(stripResumeMarkup).filter(Boolean) ?? []
    const missing = contentLines.length === 0 && resultLines.length === 0

    return {
      name: company.name,
      onlineName,
      role: company.role,
      period: company.period,
      department: company.department,
      missing,
      content: contentLines.length
        ? toField('内容', numbered(contentLines))
        : undefined,
      result: resultLines.length ? toField('业绩', numbered(resultLines)) : undefined
    }
  })

  return { kind: 'companies', title: '工作经历', items }
}

function buildProjects(resume: Resume): ProjectsBlock {
  const items = collectProjects(resume).map((project) => {
    const content = numbered([
      stripResumeMarkup(project.scene),
      stripResumeMarkup(project.action)
    ])
    const result = numbered(splitResultSentences(project.result))
    return {
      name: project.name,
      role: project.role,
      period: project.period,
      kind: project.kind,
      content: toField('内容', content),
      result: toField('业绩', result)
    }
  })

  return { kind: 'projects', title: '项目经历', items }
}

function buildEducation(education: Education[]): EducationBlock {
  const text = education
    .map((e, i) => `${i + 1}. ${e.school} · ${e.major} · ${e.degree}`)
    .join('\n')
  return {
    kind: 'education',
    title: '教育经历',
    items: education,
    field: toField('教育经历', text)
  }
}

export function buildOnlineResumeBlocks(resume: Resume, extras: OnlineExtras): OnlineResumeCopy {
  const projects = collectProjects(resume)
  return {
    projectCount: projects.length,
    companyCount: resume.companies.length,
    blocks: [
      buildAdvantage(resume),
      { kind: 'expectations', title: '期望职位', items: extras.expectations },
      buildCompanies(resume.companies, extras),
      buildProjects(resume),
      buildEducation(resume.education)
    ]
  }
}
