<script setup lang="ts">
import { DialogClose, type DialogCloseProps, useForwardProps } from 'reka-ui'

const props = defineProps<DialogCloseProps>()

const forwarded = useForwardProps(props)
</script>

<template>
  <DialogClose data-slot="sheet-close" v-bind="forwarded">
    <slot />
  </DialogClose>
</template>
