<script setup lang="ts">
import type { Project } from '../types'
import RichText from './rich-text.vue'

defineProps<{ project: Project; index?: number }>()
</script>

<template>
  <article class="break-avoid border-t border-line py-3">
    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span class="font-mono text-[10.5px] font-bold text-accent">
        {{ String((index ?? 0) + 1).padStart(2, '0') }}
      </span>
      <h3 class="m-0 font-sans text-[13.5px] font-bold leading-snug tracking-[-0.01em] text-ink">
        {{ project.name }}
      </h3>
      <span class="font-mono text-[10.5px] uppercase tracking-[0.05em] text-ink-faint">
        / {{ project.kind }} / {{ project.period }} / {{ project.role }}
      </span>
    </div>
    <RichText :text="project.result" class="mt-1 block text-[12.8px] leading-[1.65] text-ink-soft" />
  </article>
</template>
