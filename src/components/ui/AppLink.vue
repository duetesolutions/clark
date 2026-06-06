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
      'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 rounded-sm',
      variant === 'inline' &&
        'underline underline-offset-2 decoration-transparent hover:decoration-[color:var(--color-primary)]',
      variant === 'nav' && 'no-underline text-sm font-medium',
      variant === 'footer' && 'no-underline text-sm',
    ]"
    :style="
      variant === 'inline'
        ? {
            color: 'var(--color-text)',
            '--tw-ring-color': 'var(--color-primary)',
          }
        : variant === 'nav'
          ? {
              color: 'var(--color-text-muted)',
              '--tw-ring-color': 'var(--color-primary)',
            }
          : {
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
              '--tw-ring-color': 'var(--color-primary)',
            }
    "
    @mouseover="
      (e) => {
        const el = e.currentTarget as HTMLAnchorElement
        if (variant === 'nav' || variant === 'footer') {
          el.style.color = 'var(--color-primary)'
        }
      }
    "
    @mouseleave="
      (e) => {
        const el = e.currentTarget as HTMLAnchorElement
        if (variant === 'nav' || variant === 'footer') {
          el.style.color = 'var(--color-text-muted)'
        }
      }
    "
  >
    <slot />
  </a>
</template>
