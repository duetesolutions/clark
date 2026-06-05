<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'pricing' | 'feature' | 'testimonial'
    highlighted?: boolean
  }>(),
  {
    variant: 'default',
    highlighted: false,
  },
)
</script>

<template>
  <div
    :class="[
      'card',
      `card--${variant}`,
      { 'card--highlighted': highlighted },
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  transition: transform 150ms ease, box-shadow 150ms ease;
  border-radius: 0.75rem; /* rounded-xl */
}

.card:hover {
  transform: scale(1.01);
}

/* default */
.card--default {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1.5rem; /* 24px */
}

/* pricing */
.card--pricing {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 2.5rem; /* 40px — more than default */
  text-align: center;
}

/* feature */
.card--feature {
  background-color: var(--color-bg-muted);
  border: none;
  padding: 1.5rem;
}

/* testimonial */
.card--testimonial {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1.5rem;
}

/* highlighted — green border + glow */
.card--highlighted {
  border: 2px solid var(--color-primary);
  box-shadow:
    0 0 0 1px var(--color-primary),
    0 4px 24px 0 color-mix(in srgb, var(--color-primary) 30%, transparent);
}

.card--highlighted:hover {
  box-shadow:
    0 0 0 1px var(--color-primary),
    0 8px 32px 0 color-mix(in srgb, var(--color-primary) 40%, transparent);
}
</style>
