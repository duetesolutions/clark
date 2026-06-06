<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      // Base styles
      'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      // Size variants
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-5 py-2.5 text-base',
      size === 'lg' && 'px-7 py-3.5 text-lg',
      // Disabled state
      (disabled || loading) && 'cursor-not-allowed opacity-50',
    ]"
    :style="
      variant === 'primary'
        ? {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-dark)',
            '--tw-ring-color': 'var(--color-primary)',
          }
        : variant === 'secondary'
          ? {
              backgroundColor: 'transparent',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              '--tw-ring-color': 'var(--color-primary)',
            }
          : {
              backgroundColor: 'transparent',
              color: 'var(--color-text-muted)',
              '--tw-ring-color': 'var(--color-primary)',
            }
    "
    @mouseover="
      (e) => {
        const el = e.currentTarget as HTMLButtonElement
        if (disabled || loading) return
        if (variant === 'primary') {
          el.style.backgroundColor = 'var(--color-primary-hover)'
        } else if (variant === 'secondary') {
          el.style.backgroundColor = 'var(--color-primary)'
          el.style.color = 'var(--color-dark)'
        } else {
          el.style.color = 'var(--color-primary)'
        }
      }
    "
    @mouseleave="
      (e) => {
        const el = e.currentTarget as HTMLButtonElement
        if (variant === 'primary') {
          el.style.backgroundColor = 'var(--color-primary)'
        } else if (variant === 'secondary') {
          el.style.backgroundColor = 'transparent'
          el.style.color = 'var(--color-primary)'
        } else {
          el.style.color = 'var(--color-text-muted)'
        }
      }
    "
  >
    <!-- Spinner (shown when loading) -->
    <span v-if="loading" class="flex items-center justify-center">
      <svg
        class="animate-spin"
        :class="[size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5']"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </span>

    <!-- Slot content (visually hidden when loading but keeps layout stable) -->
    <span :class="loading ? 'invisible absolute' : ''">
      <slot />
    </span>
  </button>
</template>
