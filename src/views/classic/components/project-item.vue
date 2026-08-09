<script setup lang="ts">
import type { Project } from '../types'
import RichText from './rich-text.vue'

defineProps<{ project: Project; index?: number }>()

const rows = [
  { label: '项目背景', key: 'scene' },
  { label: '核心工作', key: 'action' },
  { label: '项目成果', key: 'result' }
] as const
</script>

<template>
  <article class="break-avoid py-4 first:pt-0">
    <div class="mb-3 grid gap-x-4 gap-y-2 sm:grid-cols-[1fr_auto] sm:items-start">
      <div class="min-w-0">
        <h3 class="m-0 font-classic-sans text-[16px] font-bold leading-tight tracking-[-0.015em] text-classic-ink">
          <a
            v-if="project.href"
            :href="project.href"
            target="_blank"
            rel="noreferrer"
            class="text-classic-accent transition-colors hover:text-classic-accent-deep"
          >
            {{ project.name }}
          </a>
          <template v-else>{{ project.name }}</template>
        </h3>
        <div class="mt-1.5 text-[11px] text-classic-ink-faint">
          {{ project.kind }} · {{ project.period }}
        </div>
      </div>
      <span
        class="justify-self-start text-[11px] font-semibold text-classic-accent sm:justify-self-end"
      >
        {{ project.role }}
      </span>
    </div>

    <div class="grid gap-2">
      <div v-for="row in rows" :key="row.label" class="grid gap-2 sm:grid-cols-[56px_1fr]">
        <span class="text-[11px] font-semibold text-classic-ink">
          {{ row.label }}
        </span>
        <RichText :text="project[row.key]" class="min-w-0 text-[13px] leading-[1.7] text-classic-ink-soft" />
      </div>
    </div>
  </article>
</template>
