# 项目规范

一个项目的起步，离不开优秀的文档目录架构，下面截取我日常开发的一些目录结构。

## README.md

项目起步文档，简述你的项目背景，用到的技术栈，如何快速上手等等。

## Vite + Vue3 架构

适用于 `pc` 、 `h5` 、`公众号`

```
root:.
│  .gitignore
│  index.html
│  package.json
│  README.md
│  vite.config.js
│
├─build # 编译相关
│  ├─compress.js
│  ├─html.js
│  ├─plugin.js
│  ├─proxy.js
│  └─utils.js
│
├─public # 静态资源
│
└─src
    │  App.vue
    │  main.js
    │
    ├─api # api接口
    ├─assets  # 图片、视频、音频、字体等资源
    │  ├─images
    │  ├─logo
    │  └─styles
    │
    ├─components # 组件库
    ├─enums # 前端枚举
    ├─hooks # hook方法
    ├─install # 指令、插件
    │  ├─directives
    │  └─plugins
    │
    ├─layouts # 骨架
    │  ├─blank
    │  └─default
    │
    ├─router # 路由
    │
    ├─store # store
    │
    ├─utils # 工具方法
    │
    └─pages(views) # 页面
```

## Taro + Vue3 架构

仅适用于 `小程序`

```
root:.
│  .editorconfig
│  .gitignore
│  babel.config.js
│  jsconfig.json
│  package.json
│  project.config.json # 微信小程序
│  project.alipay.json # 支付宝小程序
│  README.md
│
├─config # 环境变量和模式
│      dev.js
│      index.js
│      prod.js
│      stage.js
│
└─src
    │  app.config.js # 全局配置
    │  app.js # 入口文件
    │  index.html # html
    │
    ├─api # api接口
    │
    ├─assets  # 图片、视频、音频、字体等资源
    │  ├─fonts
    │  ├─images
    │  ├─styles
    │  └─tabs
    │
    ├─components # 公共组件
    │
    ├─hooks # hook方法
    │
    ├─install # 指令、插件
    │  ├─directives
    │  └─nutui
    │
    ├─pages # 页面
    │
    ├─store # store
    │
    └─utils # 工具方法
```

