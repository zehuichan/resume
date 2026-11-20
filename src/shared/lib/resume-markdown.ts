import type { Project, Resume } from '../../views/classic/types'
import { compactProjects, featuredProjects, resumeMetrics, specLine } from './resume-sections'

/** 简历标记转 Markdown：==高亮== 写成加粗，**加粗** 和 `代码` 本来就是 Markdown */
function inline(text: string): string {
  return text.replace(/==([^=]+)==/g, '**$1**').trim()
}

function linked(name: string, href?: string): string {
  return href ? `[${name}](${href})` : name
}

function featuredProject(project: Project): string[] {
  const rows: [string, string | undefined][] = [
    ['项目背景', project.scene],
    ['核心工作', project.action],
    ['项目成果', project.result],
    ['项目收获', project.learning]
  ]
  return [
    `### ${linked(project.name, project.href)}`,
    '',
    `${project.kind} · ${project.period} · ${project.role}`,
    '',
    ...rows.filter((row): row is [string, string] => Boolean(row[1])).map(([label, text]) => `- **${label}**：${inline(text)}`),
    ''
  ]
}

/** 整份简历转成 Markdown，节的顺序和内容与简历页一致 */
export function buildResumeMarkdown(resume: Resume, now: Date = new Date()): string {
  const { profile } = resume
  const lines: string[] = [
    `# ${profile.name}`,
    '',
    profile.title,
    '',
    specLine(profile, now),
    '',
    profile.contacts.map((c) => c.value).join(' / '),
    '',
    resumeMetrics(resume, now)
      .map((m) => `${m.value} ${m.unit} ${m.label}`)
      .join(' · '),
    '',
    '## 个人优势',
    '',
    inline(profile.summary),
    '',
    '## 专业技能',
    '',
    ...resume.skills.map((s) => `- **${s.label}**：${inline(s.body)}`),
    '',
    '## 工作经历',
    ''
  ]

  for (const company of resume.companies) {
    lines.push(`### ${company.name}`, '', `${company.department} · ${company.role} · ${company.period}`, '')
    for (const highlight of company.highlights ?? []) lines.push(`- ${inline(highlight)}`)
    if (company.highlights?.length) lines.push('')
    if (company.keywords?.length) lines.push(`关键词：${company.keywords.join(' · ')}`, '')
  }

  lines.push('## 项目经历', '')
  for (const project of featuredProjects(resume)) lines.push(...featuredProject(project))

  lines.push('## 其他项目', '')
  for (const project of compactProjects(resume)) {
    lines.push(
      `- **${linked(project.name, project.href)}**（${project.kind} · ${project.period} · ${project.role}）：${inline(project.result)}`
    )
  }

  lines.push(
    '',
    '## 开源经历',
    '',
    inline(resume.openSource.intro),
    '',
    ...resume.openSource.items.map((o) => `- [${o.name}](${o.href}) / ${o.desc}`),
    '',
    '## 教育背景',
    '',
    ...resume.education.map((e) => `- ${e.school} / ${e.major} / ${e.degree}`),
    ''
  )

  return lines.join('\n')
}
