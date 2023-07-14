<template>
  <div class="experience-card" :class="_class">
    <div class="experience-card-header">
      <div class="experience-card-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="experience-card-header__value">{{ value }}</div>
    </div>
    <div class="experience-card__footer">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    title: String,
    value: String,
    size: {
      type: String,
      default: 'normal'
    },
    background: Boolean
  },
  computed: {
    _class() {
      const { size, background } = this
      return {
        ['experience-card--' + size]: size,
        'is-background': background
      }
    }
  }
})
</script>

<style lang="scss">
.experience-card {
  margin-top: 1rem;
  line-height: 24px;
  color: var(--vp-c-text-1);

  &.is-background {
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft);
  }
}

.experience-card--normal {
  padding: 1.6em;
}

.experience-card--small {
  padding: 0.5em;
}

.experience-card-header {
  display: flex;
}

.experience-card-header__title,
.experience-card-header__value {
  flex: 1;
}

.experience-card-header__title {
  font-weight: 700;
  font-size: 15px;
}

.experience-card-header__value {
  text-align: right;
  font-style: italic;
  font-size: 12px;
  flex: none;
}

.experience-card__footer {

  > p {
    margin-top: 8px;
    margin-bottom: 0;
  }
}
</style>
