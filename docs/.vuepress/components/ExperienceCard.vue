<template>
  <div class="experience-card" :class="background ? 'is-background' : ''">
    <div class="experience-card-header">
      <div class="experience-card-header__title">{{ title }}</div>
      <div class="experience-card-header__value">{{ value }}</div>
    </div>
    <div class="experience-card__footer">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    title: String,
    value: String,
    background: Boolean
  }
}
</script>

<style lang="scss">
.experience-card {
  margin-top: 1rem;
  padding: 0.5rem;
  line-height: 24px;
  color: var(--c-text);

  &.is-background {
    border-radius: 4px;
    background-color: var(--c-bg-lighter);
  }
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
}
</style>