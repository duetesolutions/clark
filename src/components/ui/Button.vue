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
      'btn',
      `btn--${variant}`,
      // Base styles
      'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      // Size variants
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-5 py-2.5 text-base',
      size === 'lg' && 'px-7 py-3.5 text-lg',
      // Disabled state
      (disabled || loading) && 'btn--disabled cursor-not-allowed opacity-50',
    ]"
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

<style scoped>
.btn {
  --tw-ring-color: var(--color-primary);
  transition:
    transform 200ms cubic-bezier(0.34, 1.4, 0.64, 1),
    box-shadow 200ms ease,
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease;
  will-change: transform;
}

/* lift on hover, press down on click — shared by all enabled variants */
.btn:not(.btn--disabled):hover {
  transform: translateY(-1px);
}

.btn:not(.btn--disabled):active {
  transform: translateY(0);
  transition-duration: 80ms;
}

/* ---- primary ---- */
.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.btn--primary:not(.btn--disabled):hover {
  background-color: var(--color-primary-hover);
  box-shadow: 0 4px 14px -6px color-mix(in srgb, var(--color-primary) 45%, transparent);
}

/* ---- secondary (outline that fills) ---- */
.btn--secondary {
  background-color: transparent;
  border: 1.5px solid var(--color-primary);
  color: var(--color-primary);
}

.btn--secondary:not(.btn--disabled):hover {
  background-color: var(--color-primary);
  color: var(--color-dark);
  box-shadow: 0 4px 14px -6px color-mix(in srgb, var(--color-primary) 35%, transparent);
}

/* ---- ghost ---- */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-muted);
}

.btn--ghost:not(.btn--disabled):hover {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}
</style>
