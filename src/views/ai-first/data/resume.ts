import type { AiResume } from '../types'

export const aiResume: AiResume = {
  profile: {
    name: '陈泽辉',
    eyebrow: 'AI-NATIVE FRONTEND LEAD',
    title: '前端负责人｜AI 编码工程化',
    avatar: 'avatar.png',
    experienceStartYear: 2015,
    meta: ['广州', '本科', '随时到岗'],
    summary:
      '10 年+ 前端研发与 6 人团队管理经验。以 Vue3 与多端架构为交付底座，把 Agent Skills、上下文约束、质检脚本、Code Review、CI/CD 与监控串成团队级 Vibe-Coding 闭环，让 AI 生成代码能够稳定进入真实项目。',
    contacts: [
      {
        label: 'Email',
        value: 'jasonchenzehui@gmail.com',
        href: 'mailto:jasonchenzehui@gmail.com'
      },
      {
        label: 'GitHub',
        value: 'github.com/zehuichan',
        href: 'https://github.com/zehuichan'
      }
    ]
  },
  metrics: [
    { value: '6', unit: '人', label: '前端团队', detail: '排期、分工、Review、培养与交付结果' },
    { value: '7', unit: '个', label: 'CI/CD 覆盖系统', detail: 'ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS' },
    { value: '分钟级', unit: '', label: '标准 CRUD 生成', detail: 'Skills 约束生成，脚本与人工 Review 兜底' }
  ],
  pipeline: [
    {
      index: '01',
      label: 'Define',
      owner: 'Human',
      detail: '负责人确认需求边界、架构取舍和不可接受风险。',
      output: '任务契约'
    },
    {
      index: '02',
      label: 'Context',
      owner: 'System',
      detail: '项目规范、组件约束、OpenAPI 与示例代码进入上下文。',
      output: '受控上下文'
    },
    {
      index: '03',
      label: 'Generate',
      owner: 'Agent',
      detail: 'Agent 按 Skills 生成 CRUD、组件与配套代码。',
      output: '候选实现'
    },
    {
      index: '04',
      label: 'Verify',
      owner: 'Human',
      detail: '质检脚本、类型检查与 Code Review 共同验证结果。',
      output: '可合并代码'
    },
    {
      index: '05',
      label: 'Deliver',
      owner: 'System',
      detail: 'CI/CD 发布并由监控承接上线后的质量反馈。',
      output: '生产交付'
    }
  ],
  cases: [
    {
      name: 'GeorgeGroup Agent Skills · AI 编码基建',
      kind: 'AI 工程化',
      period: '2025.09 - 至今',
      role: '方向负责人',
      signal: '6 人团队日常使用',
      input: '团队在 Cursor、Claude Code 中生成 CRUD 与业务组件，但目录、写法和质量标准不一致。',
      constraints: '生成结果必须遵循既有 Vue3 架构、组件规范、OpenAPI 接入方式和代码审查边界。',
      agentExecution: '建设 Skills 仓与 npx skills 安装链路，沉淀 vue-vben-crud、vue-components-practices 和质检脚本。',
      humanReview: '负责人定义需求边界、架构取舍与风险，成员通过 Review 校验业务正确性，脚本负责机械规则。',
      outcome: '标准 CRUD 与规范组件可分钟级生成，6 人团队共享同一套目录、组件和质量约束。',
      tech: ['Cursor', 'Claude Code', 'Agent Skills', 'OpenAPI', 'CI/CD']
    },
    {
      name: '敬城集团前端架构体系路线图',
      kind: '架构与团队治理',
      period: '2025.09 - 至今',
      role: '前端负责人',
      signal: '7 个系统自动化交付',
      input: '后台、H5、小程序与低代码需求并行增长，各项目重复搭建模板、组件、权限和发布流程。',
      constraints: '统一架构必须兼顾多端差异、存量系统迁移、团队能力梯度和持续交付稳定性。',
      agentExecution: '将模板、组件矩阵、Tenon、Agent Skills、CI/CD 与监控组织为五层前端能力路线图。',
      humanReview: '负责 6 人团队排期分工、技术方案、Code Review、成员培养和跨项目交付结果。',
      outcome: '形成项目初始化到发布监控的统一资产链路，CI/CD 覆盖 ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS。',
      tech: ['Vue3', 'Vite', 'Monorepo', 'GitLab CI/CD', 'Monitoring']
    },
    {
      name: 'Tenon 低代码画布引擎',
      kind: '低代码平台',
      period: '2026.07 - 至今',
      role: '架构主导',
      signal: '@tenon/plugin 一行接入',
      input: '集团中后台存在大量表单、表格、详情与流程页面，需要降低重复开发成本。',
      constraints: '可视化搭建必须嵌入现有 pro-code 系统，不能牺牲源码工程的扩展性和发布链路。',
      agentExecution: '设计 @tenon/* monorepo、Schema 协议、设计器、渲染器、物料与插件分层。',
      humanReview: '主导协议边界、插件接口、运行时装填策略和与后台模板的集成方案。',
      outcome: '形成 /__tenon__/ 设计器、TenonRenderer、物料注册与 GitLab npm 私服发布链路。',
      tech: ['Vue3', 'TypeScript', 'Schema', 'Vite Plugin', 'GitLab npm']
    }
  ],
  capabilities: [
    { label: 'Vibe-Coding', proof: '把提示词经验升级为可安装 Skills、受控上下文、质检脚本与交付门禁。' },
    { label: '团队管理', proof: '直接带领 6 名前端，负责排期、分工、Review、培养和结果交付。' },
    { label: 'Vue3 架构', proof: '从启动模板、组件矩阵到 Schema、物料与插件体系，持续沉淀可复用资产。' },
    { label: '跨端交付', proof: '覆盖后台、H5、公众号、小程序与低代码平台，多业务线并行推进。' },
    { label: '工程质量', proof: '通过请求层、权限、异常兜底、类型检查、CI/CD 与监控前移质量。' },
    { label: '复杂问题', proof: '能从业务约束定位架构边界，拆解方案并推动团队完成生产交付。' }
  ],
  classicEvidence: [
    '中视 ETC：日均发行 10000+，累计服务用户 100 万。',
    '4S 店 SaaS：独立交付支付宝双端，单店月保养 GMV 40 万。',
    '科技成果平台：前站、后台、专家小程序与直播平台四个子系统按期上线。'
  ],
  closing: 'Human sets the boundary. Agent accelerates the path. System guards the result.'
}
