<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Timeline from '@/components/ui/Timeline.vue'

const { t } = useI18n()

const steps = computed(() => [
  { step: '01', title: t('process.step1'), description: t('process.step1_desc') },
  { step: '02', title: t('process.step2'), description: t('process.step2_desc') },
  { step: '03', title: t('process.step3'), description: t('process.step3_desc') },
  { step: '04', title: t('process.step4'), description: t('process.step4_desc') },
  { step: '05', title: t('process.step5'), description: t('process.step5_desc') },
  { step: '06', title: t('process.step6'), description: t('process.step6_desc') },
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

      <!-- Steps -->
      <div class="mx-auto max-w-170">
        <Timeline :items="steps" />
      </div>
    </div>
  </section>
</template>
