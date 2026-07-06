import type { Theme } from '../types'

/** 明暗两套主题。CSS 变量在 `src/styles/main.css` 实现：light = :root 默认值，dark = 覆盖块 */
export const themes: readonly Theme[] = [
  { id: 'light', label: 'Light Spec', swatch: '#0f7a4a' },
  { id: 'dark', label: 'Dark Spec', swatch: '#34d399' }
]
