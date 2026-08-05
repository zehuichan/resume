<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Profile } from '../types'
import { getExperienceYears } from '../../../shared/utils/experience'

const props = defineProps<{ profile: Profile }>()

const years = computed(() => getExperienceYears(props.profile.experienceStartYear))
const avatarUrl = computed(() => `${import.meta.env.BASE_URL}${props.profile.avatar}`)
const surname = computed(() => props.profile.name.charAt(0) || '?')
const contactLine = computed(() => props.profile.contacts.map((c) => c.value).join(' / '))
const specLine = computed(() => [`${years.value} 年+ 工作经验`, ...props.profile.meta].join(' · '))

/** 头像文件缺失或加载失败时，回退到姓氏占位块，避免露出浏览器默认的裂图图标 */
const avatarFailed = ref(false)
</script>

<template>
  <header class="reveal break-avoid border-b border-classic-line pb-5">
    <div class="flex items-start justify-between gap-5">
      <div class="min-w-0">
        <h1 class="m-0 font-classic-sans text-[clamp(2rem,5vw,2.8rem)] font-bold leading-[1.15] text-classic-ink">
          {{ profile.name }}
        </h1>
        <div class="mt-2 text-[17px] font-semibold text-classic-accent">{{ profile.title }}</div>
      </div>

      <div class="flex-none w-[68px] h-[68px] overflow-hidden border border-classic-line bg-classic-paper-soft sm:w-[78px] sm:h-[78px]">
        <img
          v-if="!avatarFailed"
          :src="avatarUrl"
          :alt="profile.name"
          class="h-full w-full object-cover"
          @error="avatarFailed = true"
        />
        <div
          v-else
          class="flex h-full w-full items-center justify-center font-classic-display text-[32px] font-black text-classic-ink-faint"
        >
          {{ surname }}
        </div>
      </div>
    </div>

    <div class="mt-4 grid gap-2 border-t border-classic-line pt-3 text-[12px] leading-relaxed sm:grid-cols-[1.15fr_1fr]">
      <div class="font-medium text-classic-ink">{{ specLine }}</div>
      <div class="flex min-w-0 flex-wrap gap-x-3 gap-y-1 text-classic-ink-faint sm:justify-end">
        <template v-for="(c, i) in profile.contacts" :key="c.label">
          <a
            :href="c.href"
            target="_blank"
            rel="noreferrer"
            class="transition-colors hover:text-classic-accent"
          >
            {{ c.value }}
          </a>
          <span v-if="i < profile.contacts.length - 1" class="text-classic-line">/</span>
        </template>
      </div>
    </div>

    <p class="sr-only">
      {{ contactLine }}
    </p>
  </header>
</template>
