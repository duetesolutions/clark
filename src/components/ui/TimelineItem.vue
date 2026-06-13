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
    <!-- Left column: step badge + connector line -->
    <div class="timeline-item__left">
      <div class="timeline-item__badge" aria-hidden="true">
        <span class="timeline-item__step">{{ step }}</span>
      </div>
      <div v-if="!isLast" class="timeline-item__line" aria-hidden="true" />
    </div>

    <!-- Right column: title + description -->
    <div
      class="timeline-item__content"
      :class="{ 'timeline-item__content--last': isLast }"
    >
      <span v-if="label" class="timeline-item__label">{{ label }}</span>
      <h3 class="timeline-item__title">{{ title }}</h3>
      <p class="timeline-item__description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  gap: 1.25rem;
  align-items: stretch;
  border-radius: 12px;
  padding-right: 12px;
  transition: transform 200ms ease;
}

.timeline-item:hover {
  transform: translateX(6px);
}

.timeline-item:hover .timeline-item__badge {
  background-color: var(--color-primary);
}

/* ---- left column ---- */
.timeline-item__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.timeline-item__badge {
  width: 2.5rem; /* 40px */
  height: 2.5rem;
  border-radius: 9999px;
  background-color: #132227;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 200ms ease;
}

.timeline-item__step {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.timeline-item__line {
  width: 1px;
  flex: 1;
  min-height: 32px;
  background-color: var(--color-border);
  margin-top: 0.25rem;
}

/* ---- right column ---- */
.timeline-item__content {
  padding-bottom: 2rem;
  flex: 1;
  min-width: 0;
}

.timeline-item__content--last {
  padding-bottom: 0;
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
  font-family: var(--font-sans);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.25rem;
  line-height: 1.4;
}

.timeline-item__description {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 22px;
  margin: 0;
}
</style>
