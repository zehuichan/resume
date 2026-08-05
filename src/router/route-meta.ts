import type { RouteMeta } from 'vue-router'

function setMetaContent(name: string, content: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }
  element.content = content
}

export function applyRouteMeta(meta: RouteMeta): void {
  const title = String(meta.title ?? '陈泽辉 · 前端负责人')
  const description = String(meta.description ?? '陈泽辉的前端负责人简历')
  const themeColor = String(meta.themeColor ?? '#fafaf8')
  const resumeVersion = meta.resumeVersion === 'ai-first' ? 'ai-first' : 'classic'

  document.title = title
  document.documentElement.dataset.resume = resumeVersion
  setMetaContent('description', description)
  setMetaContent('theme-color', themeColor)
}
