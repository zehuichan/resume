<script setup lang="ts">
import type { AiCase } from '../types'
import AiRichText from './ai-rich-text.vue'

defineProps<{ project: AiCase; index: number }>()
</script>

<template>
  <article
    class="ai-case-card ai-panel ai-break-avoid"
    :aria-labelledby="`ai-case-title-${index}`"
  >
    <header class="ai-case-card__header">
      <div class="ai-case-card__index" aria-hidden="true">
        CASE / {{ String(index + 1).padStart(2, '0') }}
      </div>
      <div class="ai-case-card__heading">
        <p class="ai-case-card__kind">{{ project.kind }}</p>
        <h3 :id="`ai-case-title-${index}`" class="ai-case-card__title">{{ project.name }}</h3>
      </div>
      <p class="ai-case-card__signal">{{ project.signal }}</p>
    </header>

    <div class="ai-case-card__meta">
      <span class="ai-case-card__meta-item">{{ project.period }}</span>
      <span class="ai-case-card__meta-item">{{ project.role }}</span>
    </div>

    <dl class="ai-case-flow">
      <div class="ai-case-flow__item">
        <dt class="ai-case-flow__label">01 / INPUT</dt>
        <dd class="ai-case-flow__value">
          <AiRichText :text="project.input" />
        </dd>
      </div>
      <div class="ai-case-flow__item">
        <dt class="ai-case-flow__label">02 / CONSTRAINTS</dt>
        <dd class="ai-case-flow__value">
          <AiRichText :text="project.constraints" />
        </dd>
      </div>
      <div class="ai-case-flow__item ai-case-flow__item--agent">
        <dt class="ai-case-flow__label">03 / AGENT EXECUTION</dt>
        <dd class="ai-case-flow__value">
          <AiRichText :text="project.agentExecution" />
        </dd>
      </div>
      <div class="ai-case-flow__item ai-case-flow__item--human">
        <dt class="ai-case-flow__label">04 / HUMAN REVIEW</dt>
        <dd class="ai-case-flow__value">
          <AiRichText :text="project.humanReview" />
        </dd>
      </div>
    </dl>

    <div class="ai-case-card__outcome">
      <span class="ai-case-card__outcome-label">VERIFIED OUTCOME</span>
      <p class="ai-case-card__outcome-value">
        <AiRichText :text="project.outcome" />
      </p>
    </div>

    <ul class="ai-tech-list" aria-label="技术栈">
      <li v-for="technology in project.tech" :key="technology" class="ai-tech-list__item">
        {{ technology }}
      </li>
    </ul>
  </article>
</template>
