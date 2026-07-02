import type { Theme } from '../types'

/** 明暗两套主题。CSS 变量在 `src/styles/main.css` 实现：kami = :root 默认值，dark = 覆盖块 */
export const themes: readonly Theme[] = [
  { id: 'kami', label: '紙 Kami', swatch: '#1b365d' },
  { id: 'dark', label: '暗黑', swatch: '#6f9bce' }
]
