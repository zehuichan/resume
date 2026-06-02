<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="font-mono text-[11.5px] leading-none text-ink-soft bg-paper-soft/60 border border-line rounded px-[7px] py-[5px] whitespace-nowrap"
  >
    {{ label }}
  </span>
</template>
