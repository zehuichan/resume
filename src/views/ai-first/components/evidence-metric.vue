<script setup lang="ts">
import type { EvidenceMetric } from '../types'

defineProps<{ metric: EvidenceMetric }>()
</script>

<template>
  <article class="ai-metric ai-panel ai-break-avoid">
    <div class="ai-metric__readout">
      <strong class="ai-metric__value">{{ metric.value }}</strong>
      <span v-if="metric.unit" class="ai-metric__unit">{{ metric.unit }}</span>
    </div>
    <h3 class="ai-metric__label">{{ metric.label }}</h3>
    <p class="ai-metric__detail">{{ metric.detail }}</p>
  </article>
</template>
