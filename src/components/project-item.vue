<script setup lang="ts">
import type { Project } from '../types'
import RichText from './rich-text.vue'

defineProps<{ project: Project; index?: number }>()

const rows = [
  { label: '问题', key: 'scene' },
  { label: '体系', key: 'action' },
  { label: '产出', key: 'result' }
] as const
</script>

<template>
  <article class="break-avoid border border-line bg-paper/60 p-4">
    <div class="mb-4 grid gap-x-4 gap-y-2 sm:grid-cols-[44px_1fr_auto] sm:items-start">
      <div
        class="flex h-8 w-8 items-center justify-center border border-accent/30 bg-accent/10 font-mono text-[13px] font-bold leading-none text-accent tabular-nums"
      >
        {{ String((index ?? 0) + 1).padStart(2, '0') }}
      </div>
      <div class="min-w-0">
        <div class="mb-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
          System Case
        </div>
        <h3 class="m-0 font-sans text-[16px] font-bold leading-tight tracking-[-0.015em] text-ink">
          {{ project.name }}
        </h3>
        <div class="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-faint">
          {{ project.kind }} / {{ project.period }}
        </div>
      </div>
      <span
        class="justify-self-start border border-accent/25 bg-accent/10 px-2 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-accent sm:justify-self-end"
      >
        {{ project.role }}
      </span>
    </div>

    <div class="grid gap-2">
      <div v-for="row in rows" :key="row.label" class="grid gap-2 sm:grid-cols-[42px_1fr]">
        <span class="font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-ink-faint">
          {{ row.label }}
        </span>
        <RichText :text="project[row.key]" class="min-w-0 text-[13px] leading-[1.7] text-ink-soft" />
      </div>
    </div>
  </article>
</template>
