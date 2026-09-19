import type { RouteMeta } from 'vue-router'
import { setRouteThemeColor } from '../shared/composables/use-theme'
import { setMetaContent } from '../shared/lib/meta'

export function applyRouteMeta(meta: RouteMeta): void {
  const title = String(meta.title ?? '陈泽辉 · 前端负责人')
  const description = String(meta.description ?? '陈泽辉的前端负责人简历')
  document.title = title
  document.documentElement.dataset.resume = 'classic'
  setMetaContent('description', description)
  // theme-color 由主题层写入：暗色下要压过路由给的亮色值
  setRouteThemeColor(String(meta.themeColor ?? '#fafaf8'))
}
