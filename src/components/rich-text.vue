<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ text: string; tag?: string }>(), { tag: 'span' })

interface Token {
  type: 'text' | 'code' | 'bold' | 'hl'
  value: string
}

/** `代码` -> 行内 mono 标签；**加重** -> 深墨加重；==高亮== -> 墨蓝强调（kami 的 .hl） */
const tokens = computed<Token[]>(() => {
  const parts = props.text.split(/(`[^`]+`|\*\*[^*]+\*\*|==[^=]+==)/g)
  return parts.filter(Boolean).map((p) => {
    if (p.startsWith('`') && p.endsWith('`')) return { type: 'code', value: p.slice(1, -1) }
    if (p.startsWith('**') && p.endsWith('**')) return { type: 'bold', value: p.slice(2, -2) }
    if (p.startsWith('==') && p.endsWith('==')) return { type: 'hl', value: p.slice(2, -2) }
    return { type: 'text', value: p }
  })
})
</script>

<template>
  <component :is="tag">
    <template v-for="(t, i) in tokens" :key="i">
      <code v-if="t.type === 'code'" class="tech">{{ t.value }}</code>
      <strong v-else-if="t.type === 'bold'" class="font-semibold text-ink">{{ t.value }}</strong>
      <span v-else-if="t.type === 'hl'" class="hl">{{ t.value }}</span>
      <template v-else>{{ t.value }}</template>
    </template>
  </component>
</template>
