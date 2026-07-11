<script setup lang="ts">
import { computed } from 'vue'

type RichTextToken =
  | { kind: 'text'; value: string }
  | { kind: 'code' | 'strong' | 'highlight'; value: string }

const props = defineProps<{ text: string }>()

const tokens = computed<RichTextToken[]>(() => {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|==[^=]+==)/g
  const result: RichTextToken[] = []
  let cursor = 0

  for (const match of props.text.matchAll(pattern)) {
    const index = match.index ?? 0

    if (index > cursor) {
      result.push({ kind: 'text', value: props.text.slice(cursor, index) })
    }

    const token = match[0]
    if (token.startsWith('`')) {
      result.push({ kind: 'code', value: token.slice(1, -1) })
    } else if (token.startsWith('**')) {
      result.push({ kind: 'strong', value: token.slice(2, -2) })
    } else {
      result.push({ kind: 'highlight', value: token.slice(2, -2) })
    }

    cursor = index + token.length
  }

  if (cursor < props.text.length) {
    result.push({ kind: 'text', value: props.text.slice(cursor) })
  }

  return result
})
</script>

<template>
  <span class="ai-rich-text">
    <template v-for="(token, index) in tokens" :key="`${index}-${token.value}`">
      <code v-if="token.kind === 'code'" class="ai-rich-text__code">{{ token.value }}</code>
      <strong v-else-if="token.kind === 'strong'" class="ai-rich-text__strong">
        {{ token.value }}
      </strong>
      <mark v-else-if="token.kind === 'highlight'" class="ai-rich-text__highlight">
        {{ token.value }}
      </mark>
      <template v-else>{{ token.value }}</template>
    </template>
  </span>
</template>
