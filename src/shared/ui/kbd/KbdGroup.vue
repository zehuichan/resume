<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span data-slot="kbd-group" :class="cn('inline-flex items-center gap-1', props.class)">
    <slot />
  </span>
</template>
