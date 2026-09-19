/** 主题标识：亮色（默认）与暗色面 */
export type ThemeId = 'light' | 'dark'

export interface Theme {
  id: ThemeId
  /** 控件中展示的名称 */
  label: string
  /** 该主题强调色，用于色板小圆点 */
  swatch: string
}
