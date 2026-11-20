<script setup lang="ts">
import { computed } from 'vue'
import { commandById, type CommandId } from '../commands/commands'
import { Kbd, KbdGroup } from '../ui/kbd'

const props = defineProps<{ id: CommandId }>()

const keys = computed(() => commandById(props.id).keys)
</script>

<template>
  <KbdGroup>
    <Kbd v-for="key in keys" :key="key">{{ key }}</Kbd>
  </KbdGroup>
</template>
