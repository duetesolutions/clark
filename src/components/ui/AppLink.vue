<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    external?: boolean
    variant?: 'inline' | 'nav' | 'footer'
  }>(),
  {
    external: false,
    variant: 'inline',
  },
)
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[
      'app-link',
      `app-link--${variant}`,
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 rounded-sm',
      variant === 'inline' && 'underline underline-offset-2',
      variant === 'nav' && 'no-underline text-sm font-medium',
      variant === 'footer' && 'no-underline text-sm',
    ]"
  >
    <slot />
  </a>
</template>

<style scoped>
.app-link {
  --tw-ring-color: var(--color-primary);
  transition:
    color 200ms ease,
    text-decoration-color 200ms ease;
}

/* inline: reveal underline in brand color on hover */
.app-link--inline {
  color: var(--color-text);
  text-decoration-color: transparent;
}

.app-link--inline:hover {
  text-decoration-color: var(--color-primary);
  color: var(--color-primary);
}

/* nav + footer: muted -> brand with a tiny nudge */
.app-link--nav,
.app-link--footer {
  color: var(--color-text-muted);
  transition:
    color 200ms ease,
    transform 200ms cubic-bezier(0.34, 1.4, 0.64, 1);
}

.app-link--nav:hover,
.app-link--footer:hover {
  color: var(--color-primary);
  transform: translateY(-1px);
}
</style>
