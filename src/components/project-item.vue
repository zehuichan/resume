<script setup lang="ts">
import type { Project } from '../types'
import RichText from './rich-text.vue'

defineProps<{ project: Project }>()

const rows = [
  { label: '角色', key: 'scene' },
  { label: '动作', key: 'action' },
  { label: '结果', key: 'result' }
] as const
</script>

<template>
  <article class="break-avoid py-3.5">
    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
      <h3 class="font-display text-[16px] font-medium text-ink m-0">{{ project.name }}</h3>
      <span class="text-[13px] text-ink-faint">· {{ project.kind }} · {{ project.period }}</span>
      <span
        class="ml-auto text-[12px] font-medium text-seal bg-seal/10 rounded-[3px] px-1.5 py-0.5 whitespace-nowrap"
      >
        {{ project.role }}
      </span>
    </div>

    <div class="flex flex-col gap-1">
      <div v-for="row in rows" :key="row.label" class="flex gap-2.5">
        <span class="flex-none w-8 text-[13px] font-medium text-seal tracking-wide">
          {{ row.label }}
        </span>
        <RichText
          :text="project[row.key]"
          class="min-w-0 text-[13.5px] leading-[1.7] text-ink-soft"
        />
      </div>
    </div>
  </article>
</template>
