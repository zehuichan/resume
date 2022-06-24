<template>
  <div class="experience-card" :class="_class">
    <div class="experience-card-header">
      <div class="experience-card-header__title">{{ title }}</div>
      <div class="experience-card-header__value">{{ value }}</div>
    </div>
    <div class="experience-card__footer">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss">
.experience-card {
  margin-top: 1rem;
  line-height: 24px;
  color: var(--c-text);

  &.is-background {
    border-radius: 4px;
    background-color: var(--c-bg-lighter);
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
  font-weight: 600;
}

.experience-card-header__value {
  text-align: right;
  font-style: italic;
}

.experience-card__footer {

  > p {
    margin-top: 8px;
    margin-bottom: 0;
  }
}
</style>