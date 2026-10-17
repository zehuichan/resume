import type { OnlineExtras } from '../../../shared/types/online'

/**
 * 招聘版线上补充。工作经历正文从对应时段项目 scene / action / result 收束而来，
 * 与 PDF 同源，不为线上单独长写。
 */
export const classicOnline: OnlineExtras = {
  expectations: [
    { title: '前端负责人', salary: '20-28K', cities: '广州，佛山' },
    { title: '前端架构师', salary: '20-28K', cities: '广州' },
    { title: '高级前端工程师', salary: '18-25K', cities: '广州，佛山' }
  ],
  companies: [
    {
      name: '敬城集团',
      onlineName: '佛山敬城投资管理有限公司',
      content: [
        '担任前端负责人，带领 20 人前端团队，负责排期、分工、Code Review 与规范推广，前端技术路线与方案由本人决策，组织 AI-Coding 技术分享；集团 all in AI、研发全员配备 Cursor，由本人制定 AI 编码标准与落地链路',
        '主导前端基建主链路：规范固化为可安装脚手架，建仓即带三端模板、brick 组件与回归层；Apifox 作为接口唯一真相源，生成类型与请求；Sentry SOP 全量接入，Issue 推送企微告警群；GitLab CI/CD 自动部署，神策 / 友盟埋点统一接入',
        '架构主导 Tenon 低代码画布：Schema 协议先行，设计器、渲染器、物料与插件解耦，业务仓接入 @tenon/plugin 一行即可；Agent 经 MCP 读写同一份 Schema，写操作需人工审批',
        '架构主导 Forme 表单页面引擎：按协议 → 引擎 → 物料 kit → 成品壳分层，设计器与渲染器读同一份 FormDocument，@forme/plugin 以一个 Vite 插件接入；独立开发 Flowgram 审批流设计器，兼容 EasyProcess 存量流程',
        '独立主导 GeorgeGroup Agent Skills：把提示词做成可安装 Skills（vue-vben-crud、组件实践、UI 自测、第一性原理评审），E2E SOP 随 create-e2e 下发，回归统一走 Playwright'
      ],
      result: [
        'create-app@1.0.0、create-e2e@1.2.0 发布私服，新仓从开局到可回归一次给齐；ERP / QMS / SRM / OA / CRM 等 21 个业务仓统一运行这套链路',
        '人工搭建与 Agent 共用一份 Schema，@tenon/* 1.x 已接入 FIMS 业务仓；官网 https://tenon.gbuilderchina.com/',
        'Forme 7 个包、Flowgram 全套发布私服；制定 21 个业务仓渐进迁移路线：新板块直接上 Forme，旧路由保留 commonPage 按板块逐步迁移，迁移期间旧板块照常运行',
        '标准 CRUD 分钟级生成；20 人团队的 Cursor 产出按同一套 Skills 落进脚手架回归层，评审与 UI 自测纳入日常流程'
      ]
    },
    {
      name: '广州高鼎信息科技有限公司',
      content: [
        '负责 Holen（和林）、SM（双马）两套国际物流平台研发，交付 Vue3 管理后台与移动 H5，覆盖运营、客户、仓库、客服、派送等多角色端',
        '主导和林前端架构与迭代：从零定 Vue3 技术栈与组件分层，围绕订单、配载、出仓、财务、目的港与报表等业务域，持续建设 Table / CRUD、表单、权限、字典与精度计算等公共能力',
        '负责双马双端研发：管理端落地 Schema 表单、增强表格、动态菜单与按钮级权限；移动端完成多角色路由、列表缓存及微信支付等核心链路'
      ],
      result: [
        '持续交付两套物流平台、4 个主要前端项目，核心流程覆盖下单、仓储、配载、出仓、清关、派送、签收、财务与报表',
        '沉淀 Table / CRUD、Schema 表单、动态权限与移动端缓存等公共能力，支撑两条产品线长期迭代'
      ]
    },
    {
      name: '广州兴工科技有限公司',
      content: [
        '整站负责广东科技成果转移转化中心线上平台：前站、管理后台、专家小程序与直播四端并行开发',
        '统一请求层、缓存与工具函数，OSS 上传、动态录入等重复表单抽成业务组件；直播侧接 zego 音视频与超级白板',
        '担任前端主程，建立分支策略、Code Review 与 CI/CD，把问题前置到提交阶段'
      ],
      result: ['四端按期上线，公共组件与工具层被后续需求直接复用，专家直播稳定开播']
    },
    {
      name: '广东中视信息科技有限公司',
      content: [
        '负责中视 ETC 一站式发行平台前端：主导选型与框架搭建，把请求、字典、菜单权限重构为公共基础层',
        '高频控件基于 element-ui 做成公司级组件库发布私服，同期建立 Code Review 规范',
        '独立开发 4S 店 SAAS 支付宝小程序：定双端结构与接口约定，OSS 上传、OCR、车牌输入、选择器等高频交互一次封装、两端复用'
      ],
      result: [
        'ETC 平台落地广西、内蒙古、黑龙江、北京、安徽、江苏等省份，日均发行 10000+，累计服务用户 100 万',
        '4S 店单店月保养 GMV 做到 40 万，后续接入支付宝域内消息与灯火平台承接投放',
        '公司级组件库让高频控件跨项目复用'
      ]
    },
    {
      name: '广州创思云网络科技有限公司',
      content: [
        '独立开发同律人法律咨询移动端 App：前端搭建与接口联调，在线咨询接 tim-js-sdk，分享配置与图片上传抽成公共能力',
        '参与前端小组技术选型与框架搭建，设计可复用基础组件并落地动态路由'
      ],
      result: ['整站独立交付，IM 在线咨询串起课程、支付与订单']
    },
    {
      name: '佛山市电子口岸有限公司',
      content: [
        '从页面开发成长到整站交付，开始独立负责技术选型、工程搭建与疑难排查',
        '核心开发南海燃气管家：负责前站与配套后台，用全局 filters 与 require.context 自动注册 vuex module',
        '核心开发佛山智慧口岸：router.beforeEach 配合 addRoutes 做动态菜单，v-permission 指令统一按钮级权限',
        '核心开发国药齐富微信商城：统一 axios 请求与异常兜底，重复表单抽成业务组件'
      ],
      result: [
        '燃气管家把用户预约、后台派单、师傅现场回填接成闭环，覆盖安装、维修、安检等多类民生服务',
        '智慧口岸菜单与按钮双层权限支撑分级管理，查验与预警模块长期稳定运行',
        '国药商城交付商品浏览、购物车、下单支付、医生预约与积分卡券全链路页面'
      ]
    }
  ]
}
