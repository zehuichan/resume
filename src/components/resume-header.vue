<script setup lang="ts">
import { computed } from 'vue'
import { CircleCheck } from '@lucide/vue'
import type { Profile } from '../types'
import SealStamp from './seal-stamp.vue'

const props = defineProps<{ profile: Profile }>()

const years = computed(() => new Date().getFullYear() - props.profile.experienceStartYear)
const avatarUrl = computed(() => `${import.meta.env.BASE_URL}${props.profile.avatar}`)
const surname = computed(() => props.profile.name.charAt(0))
</script>

<template>
  <header class="reveal flex items-start gap-7 flex-col-reverse sm:flex-row">
    <div class="flex-1 min-w-0">
      <p class="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-faint m-0 mb-3">
        Curriculum Vitae · 简历
      </p>

      <h1 class="font-display font-bold text-ink leading-[0.95] m-0 text-[clamp(2.6rem,7vw,3.6rem)]">
        {{ profile.name }}
      </h1>

      <div class="mt-3 flex items-center flex-wrap gap-x-3 gap-y-1">
        <span class="font-display italic text-[20px] text-seal-deep">{{ profile.title }}</span>
        <span class="text-line">/</span>
        <span class="font-mono text-[13px] text-ink-soft">{{ years }} 年+ 前端经验</span>
      </div>

      <p class="mt-4 mb-0 max-w-[52ch] text-[14.5px] leading-7 text-ink-soft">
        {{ profile.summary }}
      </p>

      <div class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          v-for="c in profile.contacts"
          :key="c.label"
          :href="c.href"
          target="_blank"
          rel="noreferrer"
          class="group inline-flex items-center gap-2 text-[13.5px] text-ink hover:text-seal transition-colors"
        >
          <component
            :is="c.icon"
            :size="15"
            class="text-ink-faint group-hover:text-seal transition-colors"
          />
          <span class="font-mono border-b border-transparent group-hover:border-seal/40 pb-px">
            {{ c.value }}
          </span>
        </a>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          class="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-seal-deep bg-seal/10 border border-seal/20 rounded-full px-3 py-1"
        >
          <CircleCheck :size="13" />薪资 · {{ profile.availability }}
        </span>
        <span
          v-for="m in profile.meta"
          :key="m"
          class="font-mono text-[11.5px] text-ink-soft bg-paper-soft/60 border border-line rounded-full px-3 py-1"
        >
          {{ m }}
        </span>
      </div>
    </div>

    <div class="relative flex-none">
      <div class="w-[108px] h-[108px] rounded-[14px] overflow-hidden border border-line bg-paper-soft shadow-[0_10px_30px_-12px_rgba(31,27,22,0.45)]">
        <img :src="avatarUrl" :alt="profile.name" class="w-full h-full object-cover" />
      </div>
      <div class="absolute -bottom-3 -right-3">
        <SealStamp :text="surname" />
      </div>
    </div>
  </header>
</template>
