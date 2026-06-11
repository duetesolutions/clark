<script setup lang="ts">
withDefaults(
  defineProps<{
    step: number | string
    title: string
    description: string
    label?: string
    isLast?: boolean
  }>(),
  {
    label: '',
    isLast: false,
  },
)
</script>

<template>
  <div class="timeline-item">
    <!-- Left column: step indicator + connector line -->
    <div class="timeline-item__left">
      <div class="timeline-item__circle">
        <span class="timeline-item__step">{{ step }}</span>
      </div>
      <div v-if="!isLast" class="timeline-item__line" />
    </div>

    <!-- Right column: title + description -->
    <div class="timeline-item__content">
      <span v-if="label" class="timeline-item__label">{{ label }}</span>
      <h3 class="timeline-item__title">{{ title }}</h3>
      <p class="timeline-item__description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

/* ---- left column ---- */
.timeline-item__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.timeline-item__circle {
  width: 2.5rem; /* 40px */
  height: 2.5rem;
  border-radius: 9999px;
  border: 2px solid var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 12%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline-item__step {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.timeline-item__line {
  width: 2px;
  flex: 1;
  min-height: 1.5rem;
  background-color: var(--color-primary);
  opacity: 0.35;
  margin-top: 0.25rem;
}

/* ---- right column ---- */
.timeline-item__content {
  padding-bottom: 2rem;
  flex: 1;
  min-width: 0;
}

.timeline-item__label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.timeline-item__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.375rem;
  line-height: 1.4;
}

.timeline-item__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}
</style>
