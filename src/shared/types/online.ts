/** 线上简历（BOSS 等）补充字段：不进入 PDF 渲染，只供复制面板使用 */

export interface OnlineExpectation {
  /** 职位名，如「前端开发工程师」 */
  title: string
  /** 薪资区间文案，如「20-28K」 */
  salary: string
  /** 城市列表文案，如「广州，佛山」 */
  cities: string
}

export interface OnlineCompanyBody {
  /** 与 `Resume.companies[].name` 对齐的短名，如「敬城集团」 */
  name: string
  /** 线上平台使用的公司全称；缺省时回退到 `name` */
  onlineName?: string
  /** 工作内容条目（复制时编号） */
  content?: string[]
  /** 业绩条目（复制时编号） */
  result?: string[]
}

export interface OnlineExtras {
  expectations: OnlineExpectation[]
  companies: OnlineCompanyBody[]
}
