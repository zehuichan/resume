<script setup lang="ts">
import type { DeliveryStage } from '../types'

defineProps<{ stages: DeliveryStage[] }>()
</script>

<template>
  <ol class="ai-pipeline" aria-label="Vibe-Coding 交付步骤">
    <li
      v-for="stage in stages"
      :key="stage.index"
      class="ai-pipeline-stage ai-panel ai-break-avoid"
    >
      <div class="ai-pipeline-stage__head">
        <span class="ai-pipeline-stage__index">{{ stage.index }}</span>
        <span
          class="ai-pipeline-stage__owner"
          :class="`ai-pipeline-stage__owner--${stage.owner.toLowerCase()}`"
        >
          {{ stage.owner }}
        </span>
      </div>
      <h3 class="ai-pipeline-stage__label">{{ stage.label }}</h3>
      <p class="ai-pipeline-stage__detail">{{ stage.detail }}</p>
      <p class="ai-pipeline-stage__output">
        <span class="ai-pipeline-stage__output-label">产出</span>
        {{ stage.output }}
      </p>
    </li>
  </ol>
</template>
