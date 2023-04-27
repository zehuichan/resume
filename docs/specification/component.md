# 组件规范


## 辅助函数

```js
const camelizeRE = /-(\w)/g

export const camelize = (str) =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase())

export const kebabCase = (str) =>
  str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')

export function withInstall(options) {
  options.install = (app) => {
    app.component(options.name, options)
    // app.component(kebabCase(`${options.name}`), options)
    // or
    // app.component(camelize(`-${options.name}`), options)
  }
  return options
}
```

## 组件目录规范

```
│
└─VUpload
    │  index.js
    │
    └─src
            VUpload.vue
```

## 整体代码

```js
// index.js
import { withInstall } from '@/utils'
import _VUpload from './src/VUpload.vue'

export const VUpload = withInstall(_VUpload)
export default VUpload
```

```vue

<template>
  // do something...
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VUpload',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: Boolean
  },
  setup(props, { emit }) {
    // do something...

    return {}
  }
})
</script>
```
