<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const current = computed(() => (route.name === 'ai-first' ? 'ai-first' : 'classic'))
</script>

<template>
  <nav class="resume-version-nav no-print ai-no-print" aria-label="简历版本">
    <RouterLink to="/" :aria-current="current === 'classic' ? 'page' : undefined">招聘版</RouterLink>
    <RouterLink to="/ai-first" :aria-current="current === 'ai-first' ? 'page' : undefined">Agent 版</RouterLink>
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
  border: 1px solid #d9dee5;
  background: #ffffff;
  color: #4b5563;
  font: 600 12px/1 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  box-shadow: 0 2px 10px rgb(31 41 55 / 8%);
}

.resume-version-nav a {
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;
}

.resume-version-nav a[aria-current='page'] {
  background: #315b7d;
  color: #ffffff;
}

@media (max-width: 600px) {
  .resume-version-nav {
    top: 10px;
    right: 10px;
    left: 10px;
    justify-content: stretch;
  }

  .resume-version-nav a {
    flex: 1;
    text-align: center;
  }
}

@media print {
  .resume-version-nav {
    display: none;
  }
}
</style>
