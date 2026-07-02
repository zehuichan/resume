import { Code, Mail } from '@lucide/vue'
import type { Resume } from '../types'

export const resume: Resume = {
  profile: {
    name: '陈泽辉',
    title: '高级前端工程师',
    avatar: 'avatar.png',
    experienceStartYear: 2015,
    meta: ['广州', '本科', '随时到岗'],
    summary:
      '十年前端研发，深耕 `vue2/3`、`taro`、`uniapp` 跨端技术栈，擅长项目==从 0 到 1== 的架构搭建、组件抽象与性能优化；重视代码健壮性与工程规范，坚持以统一异常兜底、Code Review 与自动化质量门禁保障团队交付质量。',
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
    { value: '10', unit: '+', label: '多端交付项目' },
    { value: '100', unit: '万', label: 'ETC 平台总用户' },
    { value: '40', unit: '万', label: '单店月保养 GMV' }
  ],

  experience: {
    sub: '2015.11 - 至今 · 从独立开发到前端主程',
    timeline: [
      {
        year: '2015',
        head: '独立扛项目',
        body: '在佛山电子口岸从页面实现成长为独立负责整站：技术选型、工程搭建与疑难问题排查。'
      },
      {
        year: '2020',
        head: '沉淀团队资产',
        body: '在中视信息主导公司级组件库与 npm 私有化发布，把个人产出沉淀为多项目复用的团队资产。'
      },
      {
        year: '2022',
        head: '主程带组交付',
        body: '在兴工科技担任前端核心主程，制定分支策略与 Code Review 机制，搭建 CI/CD 缩短发布周期。'
      }
    ],
    projects: [
      {
        name: '和林国际物流信息管理系统',
        kind: '国际物流全链路',
        period: '2023.07 - 至今',
        role: '架构主导',
        scene:
          '面向全球货物运输的物流管理系统，覆盖收发、运输、仓储、报关、跟踪全链路，含用户端公众号与管理后台双端。',
        action:
          '主导 `vue3` 技术栈选型与项目框架搭建，统一工程规范与基础能力建设；负责核心业务功能实现与公共组件封装。',
        result:
          '管理后台覆盖下单、配载、订舱、清关、派送、签收、财务报表 ==7 大业务模块==；双端共用一套组件资产，体验一致、长线稳定迭代至今。'
      },
      {
        name: '广东科技成果转移转化中心线上平台',
        kind: '众包服务平台',
        period: '2022.11 - 2023.06',
        role: '整站负责',
        scene:
          '集中管理专家科研成果与知识产权，推动专家成果与企业需求对接；含前站、管理后台、专家小程序、直播平台四大子项目。',
        action:
          '统一封装请求层、基础缓存与工具函数库；依设计图抽离 OSS 图片上传、动态录入等高复用组件；整合即构 zego 实时音视频与超级白板搭建专家直播平台。',
        result:
          '==四大子系统==按期交付；抽离组件沉淀为团队资产，全站请求与工具层统一，降低维护成本、加快后续需求开发。'
      },
      {
        name: '4S 店 SAAS 系统',
        kind: '支付宝小程序',
        period: '2022.02 - 2022.08',
        role: '独立开发',
        scene:
          '基于支付宝芝麻 GO、花呗分期等信用能力设计到店保养优惠活动，商户端覆盖活动发布、订单管理、营销短信、券码核销。',
        action:
          '独立完成整站界面搭建、数据对接与前端规范设计；封装 OSS 上传、OCR 识别、车牌输入与选择器等公共组件；基于 `Taro` 存储 API 封装响应式 useStorage 统一读写。',
        result: '单店月保养 GMV 达 ==40 万==；并基于支付宝域内消息、灯火平台等公域触达能力落地商户运营工具。'
      },
      {
        name: '中视 ETC 一站式发行平台',
        kind: '支付宝生态',
        period: '2020.09 - 2022.10',
        role: '前端负责',
        scene:
          '支付宝生态下的全国 ETC 发行平台，对接各省发行、通行免密扣费、售后处理与车主服务；负责前端小组技术选型与框架搭建。',
        action:
          '主导管理后台重构：统一请求方法、公共组件、前端字典、菜单 + 按钮双层权限；基于 `element-ui` 封装组件库并维护配套文档；落地 Code Review 机制。',
        result:
          '接入广西、内蒙古、黑龙江、北京、安徽、江苏等省份，==日均发行量 10000+==、总用户规模 100 万；售后中心覆盖设备更换、ETC 注销等 7 类高频场景。'
      },
      {
        name: '国药齐富微信商城',
        kind: '医药电商 H5',
        period: '2018.12 - 2019.12',
        role: '核心开发',
        scene:
          '覆盖中西药品、滋补保健、医疗器械等板块的线上药店商城，含医生预约、购物车、下单支付、积分卡券等模块。',
        action:
          '基于 `axios` 拦截器封装统一请求层，对异常状态码与业务错误码集中捕获提示；以 postcss-px-to-viewport 统一多机型适配；封装高德地图地址、优惠券选择器等业务组件。',
        result: '统一异常兜底提升系统容错能力，==减少边界场景线上问题==；高复用业务组件支撑商城全板块快速迭代。'
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
          '法律咨询平台，含文章课程、在线咨询、在线支付、订单与钱包管理等模块；独立负责前端整站搭建与接口联调。',
        action:
          '基于 `tim-js-sdk` 搭建在线即时通信；全局前置守卫初始化 wx.config，统一实现全站微信分享；封装可复用图片上传组件。',
        result: '整站独立交付；==IM 在线咨询==支撑核心业务场景，与支付、订单模块形成服务闭环。'
      },
      {
        name: '佛山智慧口岸',
        kind: '政务管理后台',
        period: '2018.01 - 2018.07',
        role: '核心开发',
        scene: '「单一窗口」功能细化与延伸的口岸信息化平台，含查验管理、集装箱与散货动态查询及多类预警模块。',
        action:
          '基于 `router.beforeEach` 与 addRoutes 实现动态菜单；封装 ==v-permission== 自定义指令实现按钮级权限控制，统一全局权限校验逻辑。',
        result: '动态菜单与按钮级权限支撑机构、角色分级管理场景；负责长期维护与版本迭代，多类预警模块平稳运行。'
      }
    ]
  },

  companies: [
    { name: '广州兴工科技有限公司', department: '技术中心', role: '高级前端', period: '2022.11 - 至今' },
    { name: '广东中视信息科技有限公司', department: '技术中心', role: '高级前端', period: '2020.09 - 2022.10' },
    { name: '广州创思云网络科技有限公司', department: '技术部', role: '中级前端', period: '2019.04 - 2020.06' },
    { name: '佛山市电子口岸有限公司', department: '技术部', role: '中级前端', period: '2015.11 - 2019.04' }
  ],

  openSource: {
    sub: 'github.com/zehuichan',
    intro:
      '==重度极客==，习惯把重复劳动抽象成可复用资产：两个组件库均独立完成架构设计、API 定义与版本发布，注重接口稳定性与向后兼容。GitHub 公开仓库 **44 个**。',
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
      '同一套方法论在公司内落地为公司级通用业务组件库：npm 私有化发布、版本迭代与配套文档齐备，支撑多项目复用与团队开发提效。'
  },

  skills: [
    {
      label: '跨端研发',
      body: '精通 `vue2/3`、`taro`、`uniapp` 与原生小程序开发模式，一套业务覆盖 H5、App、公众号、小程序与管理后台多端交付。'
    },
    {
      label: '架构与组件',
      body: '多个项目从 0 到 1 的技术选型与框架搭建，擅长==组件抽象与分层设计==；具备组件库私有化发布与版本迭代管理经验。'
    },
    {
      label: '健壮性工程',
      body: '统一封装请求层与异常兜底策略，结合 `eslint`、`stylelint`、`prettier`、`husky` 质量门禁，在编码与提交阶段拦截低级错误。'
    },
    {
      label: '工程化协作',
      body: '掌握 `webpack`、`vite` 构建工具链，能做性能分析与专项优化；主导 Git 分支策略与 Code Review，基于 GitLab、Jenkins 搭建 CI/CD。'
    },
    {
      label: '接口与联调',
      body: '具备接口设计思维，了解 Node.js 及 `express`、`koa` 框架；熟练以 `mockjs`、`JSON-Server` 模拟后台数据，解耦前后端联调。'
    }
  ],

  education: [
    { school: '广东外语外贸大学', major: '工商管理', degree: '本科' },
    { school: '广东机电职业技术学院', major: '应用电子技术', degree: '大专' }
  ],

  closing: '感谢您花时间阅读我的简历，期待能有机会与您共事。'
}
