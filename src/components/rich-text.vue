<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ text: string; tag?: string }>(), { tag: 'span' })

interface Token {
  type: 'text' | 'code' | 'bold'
  value: string
}

const tokens = computed<Token[]>(() => {
  const parts = props.text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g)
  return parts.filter(Boolean).map((p) => {
    if (p.startsWith('`') && p.endsWith('`')) return { type: 'code', value: p.slice(1, -1) }
    if (p.startsWith('**') && p.endsWith('**')) return { type: 'bold', value: p.slice(2, -2) }
    return { type: 'text', value: p }
  })
})
</script>

<template>
  <component :is="tag">
    <template v-for="(t, i) in tokens" :key="i">
      <code v-if="t.type === 'code'" class="tech">{{ t.value }}</code>
      <strong v-else-if="t.type === 'bold'" class="font-semibold text-ink">{{ t.value }}</strong>
      <template v-else>{{ t.value }}</template>
    </template>
  </component>
</template>
