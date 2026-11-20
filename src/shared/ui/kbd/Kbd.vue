<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <kbd
    data-slot="kbd"
    :class="
      cn(
        'bg-card text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center rounded-sm border border-border px-1 font-mono text-[11px] leading-none font-medium select-none',
        props.class
      )
    "
  >
    <slot />
  </kbd>
</template>
