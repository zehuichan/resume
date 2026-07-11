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
      '10 年+ 前端研发，经历从整站独立交付、团队组件库到集团级前端基建。擅长把多端业务拆成可复用工程资产：启动模板解决项目开局，组件矩阵沉淀高频交互，低代码引擎承接页面搭建，Agent Skills 约束 AI 产码，CI/CD 与监控把质量前移到交付链路。现任敬城集团前端负责人，主导==前端架构体系路线图==，支撑后台、H5、小程序与公众号等多业务线并行交付。',
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
    { value: '7', unit: '个', label: 'CI/CD 覆盖系统' },
    { value: '100', unit: '万', label: 'ETC 平台总用户' },
    { value: '40', unit: '万', label: '单店月保养 GMV' }
  ],

  experience: {
    sub: '2015.11 - 至今 · 从独立开发到前端负责人',
    timeline: [
      {
        year: '2015',
        head: '从业务实现到整站负责',
        body: '在佛山电子口岸从页面开发走向整站交付，开始独立处理技术选型、工程搭建与疑难问题排查。'
      },
      {
        year: '2020',
        head: '从项目交付到资产沉淀',
        body: '在中视信息建设公司级组件库与 npm 私有化发布，把高频业务控件沉淀为跨项目复用资产。'
      },
      {
        year: '2022',
        head: '从个人效率到团队治理',
        body: '在兴工科技承担前端主程职责，建立分支策略、Code Review 与 CI/CD 流程，把交付质量前移到研发过程。'
      },
      {
        year: '2025',
        head: '从规范治理到架构体系',
        body: '在敬城集团把模板、组件、低代码、AI 产码、CI/CD 与监控串成前端架构路线图，支撑多业务线并行。'
      }
    ],
    projects: [
      {
        name: '敬城集团前端架构体系路线图',
        kind: '架构体系',
        period: '2025.09 - 至今',
        role: '体系主导',
        featured: true,
        scene:
          '集团后台、H5、小程序与低代码需求并行增长，如果各项目独立搭建，模板、组件、权限、发布与 AI 生成规范会反复返工；作为前端负责人统一规划前端架构路线图。',
        action:
          '把体系拆成五层：启动模板负责快速开局，组件矩阵沉淀 PC/移动/小程序高频能力，Tenon 承接页面搭建，Agent Skills 约束 AI 产码，CI/CD 与监控治理发布质量。',
        result:
          '形成从项目初始化、组件复用、页面搭建、AI 生成到发布监控的统一资产链路；CI/CD 已覆盖 ==ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS 7 个系统==。'
      },
      {
        name: 'Tenon 低代码画布引擎',
        kind: '低代码平台',
        period: '2026.07 - 至今',
        role: '架构主导',
        featured: true,
        scene:
          '集团中后台存在大量表单、表格、详情与流程页面，重复开发成本高，需要在 pro-code 系统内补一层可视化搭建与运行时渲染能力。',
        action:
          '设计 `@tenon/*` monorepo 与 Schema 协议，拆分设计器、渲染器、物料与插件；通过 Vite 插件把设计器入口、物料扫描、样式注入和持久化接入收敛为一行配置。',
        result:
          '形成 `/__tenon__/` 设计器、`TenonRenderer`、物料注册与 GitLab npm 私服发布链路，已在后台模板中完成 ==@tenon/plugin 一行接入== 与运行时物料装填。'
      },
      {
        name: 'GeorgeGroup Agent Skills · AI 编码基建',
        kind: 'AI 工程化',
        period: '2025.09 - 至今',
        role: '独立主导',
        featured: true,
        scene:
          '团队开始规模化使用 `Cursor`、`Claude Code`，但生成风格、目录结构、组件写法和质量校验缺少统一约束。',
        action:
          '建设 GeorgeGroup Skills 仓与 `npx skills` 安装链路；沉淀 `vue-vben-crud`、`vue-components-practices`，覆盖 CRUD 生成、OpenAPI 接入、组件规范与质检脚本。',
        result:
          '把 AI 从个人提示词经验变成团队可复用的产码规范，标准 CRUD 与规范组件可由 Agent ==分钟级生成==，再由脚本质检兜底。'
      },
      {
        name: '和林国际物流信息管理系统',
        kind: '国际物流全链路',
        period: '2023.07 - 2025.08',
        role: '架构主导',
        scene:
          '国际物流全链路系统，覆盖收发、运输、仓储、报关、跟踪等环节，同时承接公众号下单查货与后台业务流转。',
        action:
          '主导 `vue3` 技术栈选型、工程搭建与组件分层，统一请求、权限、表单、字典等基础能力，并落地核心业务流程。',
        result:
          '后台稳定承载下单、配载、订舱、清关、派送、签收、财务报表 ==7 大模块==，用户端与管理端共用组件资产持续迭代。'
      },
      {
        name: '广东科技成果转移转化中心线上平台',
        kind: '众包服务平台',
        period: '2022.11 - 2023.06',
        role: '整站负责',
        scene:
          '政企科技成果转移转化平台，连接专家成果、知识产权与企业需求，包含前站、管理后台、专家小程序与直播平台四个端。',
        action:
          '统一请求层、缓存与工具函数；抽离 OSS 上传、动态录入等业务组件；接入 zego 实时音视频与超级白板能力。',
        result:
          '==四个子系统==按期上线，公共组件与工具层复用于后续需求，降低多端维护成本并稳定支撑专家直播场景。'
      },
      {
        name: '4S 店 SAAS 系统',
        kind: '支付宝小程序',
        period: '2022.02 - 2022.08',
        role: '独立开发',
        scene:
          '基于支付宝芝麻 GO、花呗分期等信用能力的 4S 店营销工具，覆盖用户端活动承接与商户端运营管理。',
        action:
          '独立完成双端搭建、接口联调与规范设计；封装 OSS 上传、OCR 识别、车牌输入、选择器与响应式 `useStorage`。',
        result: '单店月保养 GMV 达 ==40 万==，并接入支付宝域内消息与灯火平台，形成用户端营销承接与商户端运营闭环。'
      },
      {
        name: '中视 ETC 一站式发行平台',
        kind: '支付宝生态',
        period: '2020.09 - 2022.10',
        role: '前端负责',
        scene:
          '支付宝生态下的全国 ETC 发行平台，对接多省发行方，覆盖客货车发行、通行扣费、售后处理与车主服务。',
        action:
          '负责前端选型与框架搭建，重构管理后台请求、字典、菜单权限与组件体系；基于 `element-ui` 封装业务组件库并落地 Code Review。',
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
        result: '统一请求与组件复用支撑商城全板块迭代，减少重复开发与边界状态遗漏，提升移动端多机型交付稳定性。'
      }
    ]
  },

  moreProjects: {
    sub: '补充 2017 - 2020 项目时间线',
    projects: [
      {
        name: '同律人 · 法律咨询',
        kind: '移动端 App',
        period: '2020.01 - 2020.07',
        role: '独立开发',
        sortDate: '2020.07',
        scene:
          '法律咨询移动端 App，覆盖内容课程、在线咨询、支付、订单、钱包与个人中心等核心服务链路。',
        action:
          '独立完成前端搭建、接口联调与模块页面；接入 `tim-js-sdk` 实现在线咨询，统一 wx.config 分享并封装图片上传。',
        result: '整站独立交付，==IM 在线咨询==与支付、订单模块形成服务闭环，支撑法律咨询核心转化。'
      },
      {
        name: '南海燃气 · 燃气管家',
        kind: '公众号 + 管理后台',
        period: '2017.08 - 2019.03',
        role: '核心开发',
        sortDate: '2019.03',
        scene:
          '面向燃气用户、客服与施工师傅的公众号及管理后台，覆盖缴费、报数、安装、改管、点火、维修、安检与用户绑定。',
        action:
          '负责前站与配套后台主要功能开发；通过全局 filters、`require.context` 自动引入 vuex module，降低多模块维护成本。',
        result: '用户预约、后台派单、师傅现场反馈形成线上闭环，支撑安装、维修、安检等==多类民生服务流程==。'
      },
      {
        name: '佛山智慧口岸',
        kind: '政务管理后台',
        period: '2018.01 - 2018.07',
        role: '核心开发',
        sortDate: '2018.07',
        scene: '「单一窗口」延伸的口岸信息化平台，覆盖查验管理、集装箱动态查询、散货查询与多类预警模块。',
        action:
          '基于 `router.beforeEach` 与 addRoutes 实现动态菜单，封装 ==v-permission== 指令统一按钮级权限校验。',
        result: '动态菜单与按钮权限支撑机构、角色分级管理；多类预警模块长期稳定运行，保障口岸业务线上流转。'
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
      '习惯把重复业务和工程经验沉淀为可复用资产：独立设计并维护 `element-components`、`vant-components` 两个组件库，覆盖 API 设计、版本发布与使用文档。GitHub 公开仓库 **44 个**。',
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
      body: '在物流、科技成果、ETC、商城、燃气等项目中落地 `vue2/3`、`taro`、`uniapp` 与原生小程序，能用统一工程规范支撑 H5、公众号、小程序与后台并行交付。'
    },
    {
      label: '架构与组件',
      body: '多次负责项目从 0 到 1 的技术选型、框架搭建与基础能力设计，能把==启动模板、组件矩阵、Schema 协议与物料分层==组织成可发布、可复用的工程资产。'
    },
    {
      label: '健壮性工程',
      body: '围绕请求层、权限、字典、异常兜底和状态边界建立基础约束，结合 `eslint`、`stylelint`、`prettier`、`husky` 等质量门禁提升交付稳定性。'
    },
    {
      label: '工程化协作',
      body: '熟悉 `webpack`、`vite` 构建链路与性能优化；能设计 Git 分支策略、Code Review 与 GitLab/Jenkins CI/CD 流程，已支撑 7 个系统自动化部署。'
    },
    {
      label: 'AI 工程化',
      body: '搭建 GeorgeGroup Agent Skills 团队技能仓，沉淀 CRUD 生成、组件规范和质检脚本，让 `Cursor`、`Claude Code` 按团队工程标准产码。'
    },
    {
      label: '接口与联调',
      body: '具备接口设计与联调意识，了解 Node.js、`express`、`koa`；能通过 `mockjs`、`JSON-Server` 等方式解耦前后端开发节奏。'
    }
  ],

  education: [
    { school: '广东外语外贸大学', major: '工商管理', degree: '本科' },
    { school: '广东机电职业技术学院', major: '应用电子技术', degree: '大专' }
  ],

  closing: '感谢阅读，期待进一步交流。'
}
