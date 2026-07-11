<script setup lang="ts">
import type { Project } from '../types'
import RichText from './rich-text.vue'

defineProps<{ project: Project; index?: number }>()
</script>

<template>
  <article class="break-avoid border-t border-classic-line py-3">
    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span class="font-classic-mono text-[10.5px] font-bold text-classic-accent">
        {{ String((index ?? 0) + 1).padStart(2, '0') }}
      </span>
      <h3 class="m-0 font-classic-sans text-[13.5px] font-bold leading-snug tracking-[-0.01em] text-classic-ink">
        {{ project.name }}
      </h3>
      <span class="font-classic-mono text-[10.5px] uppercase tracking-[0.05em] text-classic-ink-faint">
        / {{ project.kind }} / {{ project.period }} / {{ project.role }}
      </span>
    </div>
    <RichText :text="project.result" class="mt-1 block text-[12.8px] leading-[1.65] text-classic-ink-soft" />
  </article>
</template>
