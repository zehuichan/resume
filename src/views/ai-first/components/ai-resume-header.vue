<script setup lang="ts">
import { ref } from 'vue'
import type { AiProfile } from '../types'
import AiRichText from './ai-rich-text.vue'

defineProps<{ profile: AiProfile }>()

const avatarFailed = ref(false)
</script>

<template>
  <div class="ai-hero-grid">
    <div class="ai-avatar-frame">
      <img
        v-if="!avatarFailed"
        class="ai-avatar"
        :src="profile.avatar"
        :alt="`${profile.name}的头像`"
        @error="avatarFailed = true"
      />
      <span
        v-else
        class="ai-avatar-fallback"
        role="img"
        :aria-label="`${profile.name}的头像`"
      >
        {{ profile.name.slice(0, 1) }}
      </span>
      <span class="ai-avatar-status" aria-label="可随时到岗"></span>
    </div>

    <div class="ai-hero-copy">
      <p class="ai-eyebrow">
        <span class="ai-eyebrow-pulse" aria-hidden="true"></span>
        {{ profile.eyebrow }}
      </p>
      <h1 class="ai-name">{{ profile.name }}</h1>
      <p class="ai-title">{{ profile.title }}</p>

      <ul class="ai-meta" aria-label="个人概况">
        <li v-for="item in profile.meta" :key="item" class="ai-meta__item">{{ item }}</li>
      </ul>

      <p class="ai-summary">
        <AiRichText :text="profile.summary" />
      </p>
    </div>

    <address class="ai-contact-panel">
      <p class="ai-contact-panel__label">联系方式</p>
      <a
        v-for="contact in profile.contacts"
        :key="contact.label"
        class="ai-contact-link"
        :href="contact.href"
        :target="contact.href.startsWith('http') ? '_blank' : undefined"
        :rel="contact.href.startsWith('http') ? 'noreferrer' : undefined"
      >
        <span class="ai-contact-link__label">{{ contact.label }}</span>
        <span class="ai-contact-link__value">{{ contact.value }}</span>
        <span class="ai-contact-link__arrow" aria-hidden="true">↗</span>
      </a>
    </address>
  </div>
</template>
