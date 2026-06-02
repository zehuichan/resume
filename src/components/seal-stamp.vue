<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="seal" aria-hidden="true">
    <span class="seal__text">{{ text }}</span>
  </div>
</template>

<style scoped>
.seal {
  --size: 52px;
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: var(--color-seal);
  background: radial-gradient(
    circle at 35% 30%,
    color-mix(in srgb, var(--color-seal) 12%, transparent),
    color-mix(in srgb, var(--color-seal) 4%, transparent)
  );
  border: 2.5px solid var(--color-seal);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--color-seal) 14%, transparent);
  transform: rotate(-9deg);
  /* 印泥不均匀的斑驳质感 */
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='r'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.2 1.05'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23r)'/%3E%3C/svg%3E"),
    linear-gradient(#000, #000);
  mask-composite: subtract;
  -webkit-mask-composite: source-out;
}

.seal__text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 26px;
  line-height: 1;
}
</style>
