<script setup lang="ts">
defineProps<{ title: string; sub?: string }>()
</script>

<template>
  <div class="break-avoid flex items-baseline justify-between gap-3 mt-11 mb-4 pb-1.5 border-b border-line">
    <h2 class="font-display text-[19px] font-medium text-ink leading-none m-0">{{ title }}</h2>
    <span v-if="sub" class="text-[12px] text-ink-faint tracking-wide">{{ sub }}</span>
  </div>
</template>
