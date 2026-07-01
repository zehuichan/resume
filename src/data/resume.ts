import { Code, Mail } from '@lucide/vue'
import type { Resume } from '../types'

export const resume: Resume = {
  profile: {
    name: '陈泽辉',
    title: '高级前端工程师',
    avatar: 'avatar.png',
    experienceStartYear: 2015,
    availability: '面议',
    summary:
      '资深前端工程师，深耕 `vue2`/`vue3`、`taro`、`uniapp` 跨端技术栈，擅长项目从 0 到 1 的架构搭建、组件抽象与性能优化；重视代码健壮性与工程规范，坚持以统一异常处理、`Code Review` 与自动化质量门禁保障团队交付质量。',
    meta: ['本科', '广州', '随时到岗'],
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

  highlights: [
    '`element-components`、`vant-components` 组件库作者，独立完成架构设计、API 定义与版本发布，注重接口稳定性与向后兼容',
    '多年一线前端研发经验，主导多个项目从 0 到 1 的技术选型与架构搭建，擅长组件抽象、分层设计与性能优化',
    '精通 `vue2`、`vue3`、`taro(vue3)`、`uniapp(vue2/3)` 跨端开发模式，熟悉模块化开发，具备框架设计能力',
    '统一封装请求层与异常兜底策略（如 `axios` 拦截器 + 统一错误处理），有效减少边界场景下的线上问题，提升系统运行稳定性',
    '熟练运用 `eslint`、`stylelint`、`prettier`、`husky` 搭建的前端质量门禁体系，在编码与提交阶段主动拦截低级错误',
    '主导 `Git` 分支管理策略与 `Code Review` 机制建设，配合运维基于 `GitLab`、`Jenkins` 搭建持续集成（CI/CD）流程',
    '熟悉前端工程化体系，掌握 `webpack`、`vite` 构建工具链，能针对项目做性能分析、瓶颈定位与专项优化',
    '具备接口设计思维，了解 `Node.js` 及 `express`、`koa` 框架，能用 `mockjs`、`JSON-Server` 独立模拟后台数据、解耦前后端联调',
    '熟练使用 `yarn`、`npm`、`pnpm` 等包管理工具，有组件库私有化发布与版本迭代管理经验',
    '重度极客，对代码结构、可读性与可维护性有较高要求，坚持持续重构与技术债治理'
  ],

  jobs: [
    {
      company: '广州兴工科技有限公司',
      department: '技术中心',
      role: '高级前端',
      period: '2022.11 - 至今',
      stack: ['vue2/3', 'pinia', 'taro3', 'uniapp', 'element-plus', 'vant', '小程序'],
      bullets: [
        '负责众包服务平台的需求评审与开发排期，拆解任务并跟进多人协作，保障版本按时高质量交付',
        '担任前端核心主程，负责关键功能模块实现与公共组件封装，把控技术方案合理性与代码质量',
        '主导前端组技术规划与工程规范建设，制定 `Git` 分支管理策略与 `Code Review` 机制，从流程上提升代码健壮性、降低出错概率',
        '配合运维基于 `GitLab`、`Jenkins` 搭建持续集成（CI/CD）流程，实现自动化构建部署，缩短发布周期、降低人为发布风险'
      ]
    },
    {
      company: '广东中视信息科技有限公司',
      department: '技术中心',
      role: '高级前端',
      period: '2020.09 - 2022.10',
      stack: ['vue2/3', 'taro3', 'uniapp', 'element-ui', 'vant', '小程序'],
      bullets: [
        '主导设计并维护公司级通用业务组件库，支持 `npm` 私有化发布与版本迭代，兼顾接口稳定性与多项目复用，提升团队开发效率',
        '深度参与需求评审，从技术可行性与边界场景角度与产品对齐方案，提前暴露风险点并给出优化建议',
        '负责前端团队任务拆解与人员分配，主导核心功能模块实现与公共组件抽离，统一编码规范',
        '配合运维基于 `GitLab`、`Jenkins` 搭建持续集成（CI/CD）流程，保障多分支协作下的构建与发布稳定性'
      ]
    },
    {
      company: '广州创思云网络科技有限公司',
      department: '技术部',
      role: '中级前端',
      period: '2019.04 - 2020.06',
      stack: ['react', 'vue', 'ant-design', 'vant'],
      bullets: [
        '参与前端小组技术选型与项目框架搭建，权衡开发效率与长期可维护性',
        '负责 H5 App 及配套管理后台的开发，独立完成需求实现与前后端联调',
        '设计并沉淀高复用性基础组件，基于路由配置实现动态路由',
        '配合项目负责人推进项目排期，持续根据业务反馈重构与优化项目代码'
      ]
    },
    {
      company: '佛山市电子口岸有限公司',
      department: '技术部',
      role: '中级前端',
      period: '2015.11 - 2019.04',
      stack: ['less/scss', 'es6', 'vue', 'jQuery', 'element-ui', 'vux', 'vant'],
      bullets: [
        '参与项目需求分析与文档编写，结合文档产出产品原型图，明确开发边界',
        '独立负责前端项目，涵盖技术选型、工程搭建与全流程开发',
        '独立排查、定位并解决项目疑难问题，同时协助团队成员解决开发难题',
        '熟练使用 `vue` 全家桶及 `element-ui`、`vux`、`vant` 等 UI 框架，快速落地业务需求'
      ]
    }
  ],

  projects: [
    {
      name: '和林国际物流信息管理系统',
      period: '2023.07 - 至今',
      description:
        '面向全球货物运输与物流管理的综合性系统，覆盖货物收发、运输、仓储、报关、跟踪等环节。用户端公众号包含首页、菜单、订单、我的；管理后台包含下单、配载、订舱、清关、派送、签收、财务报表等模块。',
      responsibilities: [
        '主导 `vue3` 技术栈选型与项目框架搭建，统一工程规范与基础能力建设',
        '负责核心业务功能实现与公共组件封装，保障公众号与管理后台的体验一致性、代码复用性'
      ],
      stack: ['vue3', 'pinia', 'vueuse', 'element-plus', 'vant', 'jweixin']
    },
    {
      name: '广东科技成果转移转化中心全链条线上平台',
      period: '2022.11 - 2023.06',
      description:
        '集中管理与展示专家科研成果、知识产权、项目课题、个人荣誉等，推动专家成果与企业需求高效对接。包含众包服务平台前站、配套管理后台、专家小程序、专家直播平台四大子项目。',
      responsibilities: [
        '负责整站业务需求评审与开发落地，运用 `Vue3` 生态（`Pinia` / `Vue Router` / `Element Plus`）保障四大子系统按期交付',
        '统一封装请求层、基础缓存方法与工具函数库，提升接口调用一致性与代码可维护性',
        '依据设计图抽离高复用公共组件（OSS 图片上传、关键字、描述、动态录入等），沉淀团队组件资产、加快开发效率',
        '整合 `即构 zego` 实时音视频与超级白板，搭建专家直播平台'
      ],
      stack: ['taro', 'vue3', 'pinia', 'vueuse', 'element-plus', 'nutui']
    },
    {
      name: '中视 ETC 一站式发行平台',
      period: '2020.09 - 2022.10',
      description:
        '建立于支付宝生态下的 ETC 服务平台，对接全国各省 ETC 发行、通行免密扣费、售后处理与车主服务。已接入广西、内蒙古、黑龙江、北京、安徽、江苏等省份，日均发行量 10000+，总用户规模达 100 万。',
      responsibilities: [
        '负责省级 ETC 小程序与配套管理后台的长期维护和版本迭代，保障大规模发行场景下的稳定运行',
        '主导管理后台重构：统一请求方法、公共组件搭建、引入前端字典、适配菜单 + 按钮权限，降低后续维护成本',
        '负责小程序首页可配置化、公告配置、售后服务中心（取消订单、设备更换、ETC 注销、设备补办、生态回流补签、设备检测、免密代购补签）',
        '基于 `element-ui` 封装公共组件库并维护配套文档，负责日常维护、版本迭代与兼容性保障',
        '负责前端小组技术选型、框架搭建与 `Code Review` 机制落地，把控团队代码质量'
      ],
      stack: ['vue2/3', 'vite', 'pinia', 'taro', 'uniapp', '原生小程序']
    },
    {
      name: '4S 店 SAAS 系统 · 支付宝小程序',
      period: '2022.02 - 2022.08',
      description:
        '基于支付宝信用能力（芝麻 GO、花呗分期）设计到店保养优惠活动，单店月保养 GMV 达 40w；并基于支付宝公域流量，利用域内消息通知、灯火平台等触达能力设计运营工具。商户端提供活动发布、订单管理、营销短信、券码核销等管理功能。',
      responsibilities: [
        '独立负责项目前端整站建设：界面搭建、数据对接与前端规范设计',
        '统一封装请求方法、公共组件与基础缓存方法，提升代码可复用性与团队协作效率',
        '负责小程序授权登录流程对接与用户中心模块开发',
        '封装公共组件：OSS 图片上传、OCR 文字识别、车牌号输入框、车牌号选择器、toggle 选择器',
        '基于 `Taro.setStorageSync` / `Taro.getStorageSync` 封装响应式 `useStorage`，统一本地存储读写逻辑，减少重复代码'
      ],
      stack: ['taro', 'vue3', 'pinia', 'hooks', 'nutui']
    },
    {
      name: '同律人 · 法律咨询',
      period: '2020.01 - 2020.07',
      description:
        '法律咨询 App，为用户提供便捷的法律咨询平台。主要功能包含文章课程、法律产品、时事新闻、在线咨询、在线支付、地址管理、钱包管理、发票管理、订单管理、个人中心、投诉建议、人才招聘等。',
      responsibilities: [
        '独立负责前端整站搭建：统一请求方法封装、模块页面开发与接口联调',
        '在全局前置守卫中初始化 `wx.config`，统一实现全站页面的微信分享能力',
        '基于 `tim-js-sdk` 搭建在线即时通信功能，支撑在线咨询核心场景',
        '使用 `wx.chooseImage` / `wx.getLocalImgData` 封装可复用的图片上传组件'
      ],
      stack: ['vue2', 'webpack', 'uniapp', 'less', 'vant', 'tim-js-sdk', 'jweixin']
    },
    {
      name: '公司内部管理后台',
      period: '2019.08 - 2019.12',
      description:
        '公司内部使用的 SaaS 管理后台，支持租户开通与动态菜单。主要功能包含系统设置、收款设置、提款设置、开户管理、公告管理、消息管理、充值种类、反馈管理、角色管理等。',
      responsibilities: [
        '负责核心功能模块的前端开发：页面实现、公共组件抽离与接口联调',
        '基于 `Select` 封装用户选择器、部门选择器等自定义表单控件，统一交互与数据格式',
        '基于 `Tag` 封装关键字标签表单控件，规范多值输入交互',
        '封装 `ImageUpload` 自定义七牛云上传表单控件，负责日常维护与版本迭代'
      ],
      stack: ['react16', 'ant-design-pro', 'ant-design', 'dva', 'less', 'es6']
    },
    {
      name: '国药齐富微信商城',
      period: '2018.12 - 2019.12',
      description:
        '线上药店商城，业务涵盖中西药品、滋补保健、母婴孕产、生活个护、医疗器械、成人计生等板块。主要功能包含医生预约、医药文化、商品、分类列表、购物车、下单支付、个人中心、我的订单、积分、卡券管理、收货地址等模块。',
      responsibilities: [
        '独立负责商城主要功能的前端开发：页面实现、公共组件抽离与接口联调',
        '完成移动端多机型适配，使用 `postcss-px-to-viewport` 统一处理单位转换',
        '基于 `axios` 拦截器封装统一请求层，对异常状态码、业务错误码做集中捕获与提示处理，提升系统的容错能力与代码健壮性',
        '封装送货地址选择器、高德地图地址选择器、预约时间选择器、优惠券选择器、商品卡片、分割线等高复用业务组件'
      ],
      stack: ['vue2', 'vue-router', 'vuex', 'vant2', 'less', 'es6']
    },
    {
      name: '南海燃气 · 燃气管家',
      period: '2017.08 - 2019.03',
      description:
        '燃气管家公众号帮助用户在线预约燃气安检、安装、维修服务。后台接到预约后由操作员分配给施工师傅，师傅将施工图片与进程通过 App 反馈给客服，形成业务闭环。主要功能包含缴费、报数、安装、改管、点火、维修、安检、气费查询、个人中心、发票管理、用户绑定等。',
      responsibilities: [
        '负责项目前台及配套管理后台的核心功能开发：页面实现与接口联调',
        '负责项目上线后的日常维护与版本迭代，保障缴费、安检、维修等高频功能稳定可用'
      ],
      stack: ['vue2', 'vue-router', 'vuex', 'vant2', 'axios', 'less', 'es6']
    },
    {
      name: '佛山智慧口岸',
      period: '2018.01 - 2018.07',
      description:
        '"单一窗口"功能的细化与延伸，结合佛山本地口岸信息化建设开展。主要功能包含首页仪表板、查验管理、放行查询、查验流程、查验费用管理、集装箱动态查询、散货动态查询、机构管理、角色管理，以及长期堆存、分区堆放、集装箱号异常、口岸漂移、异常离场、超时未申报、超时未提离等多类预警模块。',
      responsibilities: [
        '负责项目核心功能开发：页面实现与接口联调',
        '使用 `router.beforeEach` 结合 `router.addRoutes` 实现动态菜单',
        '封装 `v-permission` 自定义指令实现按钮级权限控制，统一全局权限校验逻辑',
        '负责项目日常维护与版本迭代'
      ],
      stack: ['vue2', 'vue-router', 'vuex', 'element-ui', 'axios', 'less', 'es6']
    },
    {
      name: '跨境电子商务公共平台',
      period: '2015.11 - 2017.01',
      description:
        '管理后台项目，为跨境电商企业及国内消费者提供便捷的通关、退税、结汇、身份认证、查询等服务。主要功能包含商品备案查询、企业备案查询、商家诚信查询、问题管理、站内信、订单管理、税率查询、行邮税查询、个人设置、电子订单 / 运单 / 支付单查询等模块。',
      responsibilities: ['负责项目核心功能开发：页面实现与接口联调', '负责项目日常维护与版本迭代'],
      stack: ['ace-admin', 'jsp', 'jQuery', 'less/scss', 'ajax']
    }
  ],

  education: [
    { school: '广东外语外贸大学', major: '工商管理', degree: '本科' },
    { school: '广东机电职业技术学院', major: '应用电子技术', degree: '大专' }
  ],

  openSource: [
    {
      name: 'element 扩展组件',
      href: 'https://github.com/zehuichan/element-components',
      description: '基于 element-ui 二次封装的业务组件库，注重接口一致性与易用性'
    },
    {
      name: 'vant 扩展组件',
      href: 'https://github.com/zehuichan/vant-components',
      description: '基于 vant-ui 二次封装的业务组件库，覆盖常见移动端业务场景'
    }
  ],

  closing: '感谢您花时间阅读我的简历，期待能有机会与您共事。'
}
