import type { Theme } from '../types'

/** 可选皮肤。CSS 变量在 `src/styles/main.css` 的 `:root[data-theme='...']` 中实现 */
export const themes: readonly Theme[] = [
  { id: 'redstone', label: '红石', swatch: '#a3411d' },
  { id: 'dark', label: '暗色', swatch: '#e0573f' },
  { id: 'linear', label: 'Linear', swatch: '#5e6ad2' },
  { id: 'vercel', label: 'Vercel', swatch: '#0070f3' },
  { id: 'notion', label: 'Notion', swatch: '#2383e2' }
]
