<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    number: '01',
    title: t('process.step1'),
    description: t('process.step1_desc'),
  },
  {
    number: '02',
    title: t('process.step2'),
    description: t('process.step2_desc'),
  },
  {
    number: '03',
    title: t('process.step3'),
    description: t('process.step3_desc'),
  },
  {
    number: '04',
    title: t('process.step4'),
    description: t('process.step4_desc'),
  },
  {
    number: '05',
    title: t('process.step5'),
    description: t('process.step5_desc'),
  },
  {
    number: '06',
    title: t('process.step6'),
    description: t('process.step6_desc'),
  },
])
</script>

<template>
  <section
    id="processo"
    class="w-full py-20 sm:py-24"
    style="background-color: var(--color-bg-muted)"
    aria-labelledby="process-heading"
  >
    <div class="mx-auto max-w-3xl px-6">
      <!-- Header -->
      <div class="mb-14 flex flex-col items-center text-center">
        <!-- Tag -->
        <span
          class="mb-5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
          style="
            background-color: rgba(70, 206, 122, 0.12);
            color: var(--color-primary);
            font-family: var(--font-sans);
          "
        >
          <span aria-hidden="true">●</span> {{ t('process.tag') }}
        </span>

        <!-- H2 -->
        <h2
          id="process-heading"
          class="mb-4 text-3xl font-black sm:text-5xl"
          style="
            font-family: var(--font-display);
            color: var(--color-text);
            letter-spacing: -0.03em;
            line-height: 1.1;
          "
        >
          {{ t('process.title') }}
        </h2>

        <!-- Subtitle -->
        <p
          class="max-w-[560px] text-base leading-relaxed"
          style="font-family: var(--font-sans); color: var(--color-text-muted)"
        >
          {{ t('process.subtitle') }}
        </p>
      </div>

      <!-- Steps list -->
      <ol class="mx-auto max-w-[680px] list-none p-0">
        <li
          v-for="(step, index) in steps"
          :key="step.number"
          class="process-step flex gap-5"
        >
          <!-- Left: badge + connector line -->
          <div class="flex flex-col items-center">
            <!-- Number badge -->
            <div
              class="step-badge flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style="background-color: #132227"
              aria-hidden="true"
            >
              <span
                class="text-sm font-bold leading-none text-white"
                style="font-family: var(--font-sans)"
              >
                {{ step.number }}
              </span>
            </div>

            <!-- Connector line (not shown after last item) -->
            <div
              v-if="index < steps.length - 1"
              class="mt-1 w-px flex-1"
              style="background-color: var(--color-border); min-height: 32px"
              aria-hidden="true"
            />
          </div>

          <!-- Right: text content -->
          <div class="pb-8" :class="{ 'pb-0': index === steps.length - 1 }">
            <h3
              class="mb-1 text-lg font-bold leading-snug"
              style="font-family: var(--font-sans); color: var(--color-text)"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-sm leading-relaxed"
              style="
                font-family: var(--font-sans);
                color: var(--color-text-muted);
                line-height: 22px;
              "
            >
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process-step {
  transition: transform 200ms ease;
  border-radius: 12px;
  padding-right: 12px;
}

.process-step:hover {
  transform: translateX(6px);
}

.process-step:hover .step-badge {
  background-color: var(--color-primary) !important;
}

.step-badge {
  transition: background-color 200ms ease;
}
</style>
