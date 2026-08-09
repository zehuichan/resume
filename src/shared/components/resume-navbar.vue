<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute, type RouteLocationRaw } from 'vue-router'
import { Button } from '@/shared/ui/button'
import { ButtonGroup } from '@/shared/ui/button-group'

type NavId = 'classic' | 'ai-first' | 'online'

interface NavItem {
  id: NavId
  label: string
  to: RouteLocationRaw
}

const route = useRoute()

const current = computed<NavId>(() => {
  if (route.name === 'ai-first') return 'ai-first'
  if (route.name === 'online') return 'online'
  return 'classic'
})

const onlineSource = computed(() =>
  route.name === 'ai-first' || route.query.source === 'ai-first' ? 'ai-first' : 'classic'
)

const items = computed<NavItem[]>(() => [
  { id: 'classic', label: '招聘版', to: '/' },
  { id: 'ai-first', label: 'Agent 版', to: '/ai-first' },
  {
    id: 'online',
    label: '线上版',
    to: { name: 'online', query: { source: onlineSource.value } }
  }
])
</script>

<template>
  <nav
    class="fixed top-4 right-4 z-40 print:hidden max-sm:inset-x-2.5 max-sm:top-2.5 max-sm:right-2.5"
    aria-label="简历版本"
  >
    <ButtonGroup class="w-full border border-border bg-background shadow-sm sm:w-fit">
      <Button
        v-for="item in items"
        :key="item.id"
        as-child
        size="sm"
        :variant="current === item.id ? 'default' : 'ghost'"
        class="flex-1 sm:flex-none"
      >
        <RouterLink :to="item.to" :aria-current="current === item.id ? 'page' : undefined">
          {{ item.label }}
        </RouterLink>
      </Button>
    </ButtonGroup>
  </nav>
</template>
