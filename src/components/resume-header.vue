<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Profile } from '../types'
import { getExperienceYears } from '../utils/experience'

const props = defineProps<{ profile: Profile }>()

const years = computed(() => getExperienceYears(props.profile.experienceStartYear))
const avatarUrl = computed(() => `${import.meta.env.BASE_URL}${props.profile.avatar}`)
const surname = computed(() => props.profile.name.charAt(0) || '?')

/** 头像文件缺失或加载失败时，回退到姓氏占位块，避免露出浏览器默认的裂图图标 */
const avatarFailed = ref(false)
</script>

<template>
  <header class="reveal flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pb-4 border-b border-line">
    <div class="min-w-0">
      <h1
        class="font-display font-medium text-ink leading-none m-0 tracking-wide text-[clamp(2.4rem,6.5vw,3.2rem)]"
      >
        {{ profile.name }}
      </h1>
    </div>

    <div class="flex items-end gap-5">
      <div class="text-left sm:text-right text-[13px] leading-[1.75] text-ink-faint">
        <div class="font-display text-[15.5px] font-medium text-seal">
          {{ profile.title }}
          <span class="text-ink-faint font-normal text-[12.5px]">· {{ years }} 年+ 经验</span>
        </div>
        <div>
          <template v-for="(c, i) in profile.contacts" :key="c.label">
            <a
              :href="c.href"
              target="_blank"
              rel="noreferrer"
              class="text-ink-soft transition-colors hover:text-seal"
            >
              {{ c.value }}
            </a>
            <span v-if="i < profile.contacts.length - 1" class="text-line mx-1.5">·</span>
          </template>
        </div>
        <div>
          <template v-for="(m, i) in profile.meta" :key="m">
            <span :class="i === 0 ? 'text-ink-soft font-medium' : ''">{{ m }}</span>
            <span v-if="i < profile.meta.length - 1" class="text-line mx-1.5">·</span>
          </template>
        </div>
      </div>

      <!-- kami 式头像：适度尺寸、暖灰细边、无重投影 -->
      <div class="flex-none w-[76px] h-[76px] rounded-lg overflow-hidden border border-line bg-paper-soft">
        <img
          v-if="!avatarFailed"
          :src="avatarUrl"
          :alt="profile.name"
          class="w-full h-full object-cover"
          @error="avatarFailed = true"
        />
        <div
          v-else
          class="flex w-full h-full items-center justify-center font-display text-[30px] font-medium text-ink-faint"
        >
          {{ surname }}
        </div>
      </div>
    </div>
  </header>
</template>
