import type { Theme } from '../types/theme'

/**
 * 明暗两套主题。CSS 变量分两处实现：
 * - 简历正文：`src/views/classic/styles/resume.css` 的 `[data-theme='dark']` 覆盖块
 * - 工具型 UI：`src/shared/styles/ui.css` 的 `.dark` 覆盖块
 */
export const themes: readonly Theme[] = [
  { id: 'light', label: '亮色', swatch: '#315b7d' },
  { id: 'dark', label: '暗色', swatch: '#7fb0da' }
]
