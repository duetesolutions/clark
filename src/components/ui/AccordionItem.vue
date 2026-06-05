<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    question: string
    answer: string
    isOpen?: boolean
  }>(),
  {
    isOpen: false,
  },
)

const emit = defineEmits<{
  toggle: []
}>()

function handleToggle() {
  emit('toggle')
}
</script>

<template>
  <div class="accordion-item">
    <button
      type="button"
      class="accordion-item__trigger"
      :aria-expanded="props.isOpen"
      :aria-controls="`accordion-answer-${props.question.replace(/\s+/g, '-').toLowerCase()}`"
      @click="handleToggle"
    >
      <span class="accordion-item__question">{{ props.question }}</span>

      <span
        class="accordion-item__icon"
        :class="{ 'accordion-item__icon--open': props.isOpen }"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <Transition name="accordion">
      <div
        v-show="props.isOpen"
        :id="`accordion-answer-${props.question.replace(/\s+/g, '-').toLowerCase()}`"
        class="accordion-item__body"
      >
        <p class="accordion-item__answer">{{ props.answer }}</p>
      </div>
    </Transition>

    <div class="accordion-item__separator" aria-hidden="true" />
  </div>
</template>

<style scoped>
.accordion-item {
  width: 100%;
}

.accordion-item__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
  color: var(--color-text);
}

.accordion-item__trigger:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

.accordion-item__question {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-text);
  flex: 1;
}

.accordion-item__icon {
  flex-shrink: 0;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: transform 250ms ease;
}

.accordion-item__icon--open {
  transform: rotate(180deg);
}

.accordion-item__body {
  overflow: hidden;
}

.accordion-item__answer {
  padding-bottom: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-text-muted);
  margin: 0;
}

.accordion-item__separator {
  height: 1px;
  background-color: var(--color-border);
}

/* Transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 280ms ease, opacity 200ms ease;
  max-height: 600px;
  opacity: 1;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
