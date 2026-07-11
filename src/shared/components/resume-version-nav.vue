<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const current = computed(() => (route.name === 'classic' ? 'classic' : 'ai-first'))
</script>

<template>
  <nav class="resume-version-nav" aria-label="简历版本">
    <RouterLink to="/" :aria-current="current === 'ai-first' ? 'page' : undefined">AI-First</RouterLink>
    <RouterLink to="/classic" :aria-current="current === 'classic' ? 'page' : undefined">经典版</RouterLink>
  </nav>
</template>

<style scoped>
.resume-version-nav {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 60;
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid color-mix(in srgb, currentColor 20%, transparent);
  background: color-mix(in srgb, Canvas 88%, transparent);
  color: CanvasText;
  font: 600 11px/1 ui-monospace, monospace;
  backdrop-filter: blur(12px);
}

.resume-version-nav a {
  padding: 8px 10px;
  color: inherit;
  text-decoration: none;
}

.resume-version-nav a[aria-current='page'] {
  background: CanvasText;
  color: Canvas;
}

@media print {
  .resume-version-nav {
    display: none;
  }
}
</style>
