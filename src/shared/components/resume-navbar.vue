<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink, useRoute, type RouteLocationRaw } from 'vue-router'
import { Moon, Sun } from '@lucide/vue'
import { useTheme } from '@/shared/composables/use-theme'
import { Button } from '@/shared/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/shared/ui/button-group'

type NavId = 'classic' | 'online'

interface NavItem {
  id: NavId
  label: string
  to: RouteLocationRaw
}

const route = useRoute()

const current = computed<NavId>(() => (route.name === 'online' ? 'online' : 'classic'))

const items: NavItem[] = [
  { id: 'classic', label: '简历', to: '/' },
  { id: 'online', label: '线上版', to: '/online' }
]

const { isDark, toggle, sync } = useTheme()

const themeLabel = computed(() => (isDark.value ? '切换到亮色主题' : '切换到暗色主题'))

onMounted(sync)
</script>

<template>
  <nav
    class="fixed top-4 right-4 z-40 print:hidden max-sm:inset-x-2.5 max-sm:top-2.5 max-sm:right-2.5"
    aria-label="简历导航"
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

      <ButtonGroupSeparator />

      <Button
        type="button"
        size="sm"
        variant="ghost"
        class="flex-none px-2.5"
        :title="themeLabel"
        :aria-label="themeLabel"
        :aria-pressed="isDark"
        @click="toggle"
      >
        <Sun v-if="isDark" :size="15" />
        <Moon v-else :size="15" />
      </Button>
    </ButtonGroup>
  </nav>
</template>
