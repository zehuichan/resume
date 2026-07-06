import { Code, Mail } from '@lucide/vue'
import type { Resume } from '../types'

export const resume: Resume = {
  profile: {
    name: '陈泽辉',
    title: '前端负责人',
    avatar: 'avatar.png',
    experienceStartYear: 2015,
    meta: ['广州', '本科', '随时到岗'],
    summary:
      '10 年+ 前端研发，长期负责企业级管理后台、H5、小程序与公众号等多端交付，擅长项目==从 0 到 1== 的技术选型、工程搭建、组件抽象与质量治理。现主导集团前端基建路线，覆盖启动模板、组件库/插件市场、CI/CD、监控埋点与 Agent Skills，把团队经验沉淀为可复用的工程资产。',
    contacts: [
      {
        icon: Mail,
        label: 'Email',
        value: 'jasonchenzehui@gmail.com',
        href: 'mailto:jasonchenzehui@gmail.com'
      },
      {
        icon: Code,
        label: 'GitHub',
        value: 'github.com/zehuichan',
        href: 'https://github.com/zehuichan'
      }
    ]
  },

  /** 第一张「N 年+ 前端研发经验」由页面依据 experienceStartYear 计算 */
  metrics: [
    { value: '7', unit: '个', label: '系统 CI/CD 覆盖' },
    { value: '100', unit: '万', label: 'ETC 平台总用户' },
    { value: '40', unit: '万', label: '单店月保养 GMV' }
  ],

  experience: {
    sub: '2015.11 - 至今 · 从独立开发到前端负责人',
    timeline: [
      {
        year: '2015',
        head: '从实现到独立交付',
        body: '在佛山电子口岸完成从页面开发到整站负责的转变，开始独立处理技术选型、工程搭建与疑难问题排查。'
      },
      {
        year: '2020',
        head: '从项目到资产沉淀',
        body: '在中视信息主导公司级组件库与 npm 私有化发布，把高频业务实现沉淀为跨项目复用的团队资产。'
      },
      {
        year: '2022',
        head: '从开发到交付治理',
        body: '在兴工科技承担前端主程职责，建立分支策略、Code Review 与 CI/CD 流程，把交付质量前移到研发过程。'
      },
      {
        year: '2025',
        head: '从团队规范到基建',
        body: '在敬城集团主导模板库、组件库、CI/CD、监控埋点与 AI 编码规范体系，支撑多业务线并行交付。'
      }
    ],
    projects: [
      {
        name: '敬城集团前端基建体系',
        kind: '工程效能',
        period: '2025.09 - 至今',
        role: '体系主导',
        scene:
          '集团多业务线并行交付，需要统一项目启动、组件复用、发布监控与数据度量；作为前端负责人推进基建路线落地。',
        action:
          '沉淀后台、H5、小程序启动模板，建设 PC/移动/小程序组件库与插件市场；打通 CI/CD，接入 `Sentry`、Source Map、告警与埋点。',
        result:
          '自动化部署覆盖 ==ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS 7 个系统==，形成从创建、开发、发布到监控、度量的统一交付链路。'
      },
      {
        name: 'GeorgeGroup Agent Skills · AI 编码基建',
        kind: 'AI 工程化',
        period: '2025.09 - 至今',
        role: '独立主导',
        scene:
          '团队开始规模化使用 `Cursor`、`Claude Code`，但生成风格、目录结构和质量校验缺少统一约束。',
        action:
          '建设 GeorgeGroup Skills 仓，支持 `npx skills` 安装；沉淀 `vue-vben-crud` 与 `vue-components-practices`，覆盖 CRUD 生成、OpenAPI 接入、组件规范与质检脚本。',
        result:
          '标准 CRUD 与规范组件可由 Agent ==分钟级生成==，团队形成「规范先行、AI 产码、脚本质检」的可复制工作流。'
      },
      {
        name: '和林国际物流信息管理系统',
        kind: '国际物流全链路',
        period: '2023.07 - 2025.08',
        role: '架构主导',
        scene:
          '国际物流全链路系统，覆盖收发、运输、仓储、报关、跟踪等环节，需同时支撑公众号用户端与管理后台。',
        action:
          '主导 `vue3` 技术栈选型、工程搭建与组件分层，统一请求、权限、表单、字典等基础能力，负责核心业务流程落地。',
        result:
          '后台稳定承载下单、配载、订舱、清关、派送、签收、财务报表 ==7 大模块==，双端共用组件资产并持续迭代。'
      },
      {
        name: '广东科技成果转移转化中心线上平台',
        kind: '众包服务平台',
        period: '2022.11 - 2023.06',
        role: '整站负责',
        scene:
          '面向科研成果、知识产权与企业需求撮合的线上平台，包含前站、管理后台、专家小程序与直播平台四个端。',
        action:
          '统一请求层、缓存与工具函数；抽离 OSS 上传、动态录入等业务组件；整合 zego 实时音视频与超级白板能力。',
        result:
          '==四个子系统==按期上线，公共组件与工具层复用于后续需求，降低多端维护成本并加快迭代节奏。'
      },
      {
        name: '4S 店 SAAS 系统',
        kind: '支付宝小程序',
        period: '2022.02 - 2022.08',
        role: '独立开发',
        scene:
          '基于支付宝芝麻 GO、花呗分期等信用能力的 4S 店营销工具，覆盖用户端活动承接与商户端运营管理。',
        action:
          '独立完成整站搭建、接口联调与规范设计；封装 OSS 上传、OCR 识别、车牌输入、选择器与响应式 `useStorage`。',
        result: '单店月保养 GMV 达 ==40 万==，并接入支付宝域内消息与灯火平台，帮助商户获得可持续运营触达能力。'
      },
      {
        name: '中视 ETC 一站式发行平台',
        kind: '支付宝生态',
        period: '2020.09 - 2022.10',
        role: '前端负责',
        scene:
          '支付宝生态下的全国 ETC 发行平台，对接多省发行方，覆盖客货车发行、通行扣费、售后处理与车主服务。',
        action:
          '负责前端选型与框架搭建，重构管理后台请求、字典、权限与组件体系；基于 `element-ui` 封装业务组件库并落地 Code Review。',
        result:
          '平台接入广西、内蒙古、黑龙江、北京、安徽、江苏等省份，==日均发行 10000+==，累计服务用户规模 100 万。'
      },
      {
        name: '国药齐富微信商城',
        kind: '医药电商 H5',
        period: '2018.12 - 2019.12',
        role: '核心开发',
        scene:
          '医药电商 H5 商城，覆盖药品、保健、医疗器械、医生预约、购物车、下单支付与积分卡券等场景。',
        action:
          '封装 `axios` 请求与异常兜底，以 postcss-px-to-viewport 统一适配；沉淀地址、预约时间、优惠券等业务组件。',
        result: '统一请求与组件复用支撑商城全板块迭代，==减少边界状态线上问题==，提升移动端多机型交付稳定性。'
      }
    ]
  },

  moreProjects: {
    sub: '早期项目摘选',
    projects: [
      {
        name: '同律人 · 法律咨询',
        kind: '移动端 App',
        period: '2020.01 - 2020.07',
        role: '独立开发',
        scene:
          '法律咨询移动端 App，覆盖内容课程、在线咨询、支付、订单、钱包与个人中心等核心服务链路。',
        action:
          '独立完成前端搭建与接口联调；接入 `tim-js-sdk` 实现即时通信，统一 wx.config 分享能力并封装图片上传组件。',
        result: '整站独立交付，==IM 在线咨询==与支付、订单模块形成服务闭环，支撑法律咨询核心转化路径。'
      },
      {
        name: '佛山智慧口岸',
        kind: '政务管理后台',
        period: '2018.01 - 2018.07',
        role: '核心开发',
        scene: '「单一窗口」延伸的口岸信息化平台，覆盖查验管理、集装箱动态查询、散货查询与多类预警模块。',
        action:
          '基于 `router.beforeEach` 与 addRoutes 实现动态菜单，封装 ==v-permission== 指令统一按钮级权限校验。',
        result: '动态菜单与按钮权限支撑机构、角色分级管理；长期维护多类预警模块，保障口岸业务稳定运行。'
      }
    ]
  },

  companies: [
    { name: '敬城集团', department: '技术中心', role: '前端负责人', period: '2025.09 - 至今' },
    { name: '广州高鼎信息科技有限公司', department: '技术中心', role: '高级前端', period: '2023.07 - 2025.08' },
    { name: '广州兴工科技有限公司', department: '技术中心', role: '高级前端', period: '2022.11 - 2023.06' },
    { name: '广东中视信息科技有限公司', department: '技术中心', role: '高级前端', period: '2020.09 - 2022.10' },
    { name: '广州创思云网络科技有限公司', department: '技术部', role: '中级前端', period: '2019.04 - 2020.06' },
    { name: '佛山市电子口岸有限公司', department: '技术部', role: '中级前端', period: '2015.11 - 2019.04' }
  ],

  openSource: {
    sub: 'github.com/zehuichan',
    intro:
      '习惯把重复业务和工程经验抽象成可复用资产：独立设计并维护 `element-components`、`vant-components` 两个组件库，覆盖 API 设计、版本发布与使用文档。GitHub 公开仓库 **44 个**。',
    items: [
      {
        name: 'element-components',
        href: 'https://github.com/zehuichan/element-components',
        desc: 'Vue · 基于 element-ui 二次封装的业务组件库 · PC 管理后台场景'
      },
      {
        name: 'vant-components',
        href: 'https://github.com/zehuichan/vant-components',
        desc: 'Vue · 基于 vant-ui 二次封装的业务组件库 · 移动端业务场景'
      }
    ],
    highlightTag: '组件沉淀',
    highlight:
      '组件库方法论已在公司级业务中落地：通过 npm 私有化发布、版本迭代和配套文档，把个人封装经验转化为团队可复用资产。'
  },

  skills: [
    {
      label: '跨端研发',
      body: '熟悉 `vue2/3`、`taro`、`uniapp` 与原生小程序开发模式，能以统一工程规范支撑 H5、公众号、小程序与管理后台多端交付。'
    },
    {
      label: '架构与组件',
      body: '多次负责项目从 0 到 1 的技术选型、框架搭建与基础能力设计，擅长==组件抽象与分层治理==，具备组件库发布与版本演进经验。'
    },
    {
      label: '健壮性工程',
      body: '重视请求层、权限、异常兜底和状态边界治理，结合 `eslint`、`stylelint`、`prettier`、`husky` 等质量门禁提升交付稳定性。'
    },
    {
      label: '工程化协作',
      body: '熟悉 `webpack`、`vite` 构建链路与性能优化；能设计 Git 分支策略、Code Review 与 GitLab/Jenkins CI/CD 流程，支撑多系统自动化部署。'
    },
    {
      label: 'AI 工程化',
      body: '搭建 GeorgeGroup Agent Skills 团队技能仓，沉淀 CRUD 生成、组件规范和质检脚本，驱动 `Cursor`、`Claude Code` 按团队标准产码。'
    },
    {
      label: '接口与联调',
      body: '具备接口设计与联调意识，了解 Node.js、`express`、`koa`；能以 `mockjs`、`JSON-Server` 等方式解耦前后端开发节奏。'
    }
  ],

  education: [
    { school: '广东外语外贸大学', major: '工商管理', degree: '本科' },
    { school: '广东机电职业技术学院', major: '应用电子技术', degree: '大专' }
  ],

  closing: '感谢您花时间阅读我的简历，期待能有机会与您共事。'
}
