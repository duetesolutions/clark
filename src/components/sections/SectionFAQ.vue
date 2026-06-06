<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Accordion from '@/components/ui/Accordion.vue'

const { t } = useI18n()

const faqItems = computed(() => [
  { question: t('faq.q1'), answer: t('faq.a1') },
  { question: t('faq.q2'), answer: t('faq.a2') },
  { question: t('faq.q3'), answer: t('faq.a3') },
  { question: t('faq.q4'), answer: t('faq.a4') },
  { question: t('faq.q5'), answer: t('faq.a5') },
])
</script>

<template>
  <section
    id="faq"
    class="py-20"
    style="background-color: var(--color-bg-muted);"
    aria-labelledby="faq-title"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-12 flex flex-col items-center text-center">
        <!-- Green pill tag -->
        <span
          class="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style="background-color: rgba(70,206,122,0.12); color: var(--color-primary); font-family: var(--font-sans);"
        >
          ● {{ t('faq.tag') }}
        </span>

        <h2
          id="faq-title"
          class="text-[32px] font-black leading-tight tracking-[-0.03em] sm:text-[48px]"
          style="font-family: var(--font-sans); color: var(--color-text);"
        >
          {{ t('faq.title') }}
        </h2>
      </div>

      <!-- Accordion container -->
      <div class="mx-auto max-w-170">
        <Accordion :items="faqItems" :multiple="false" />
      </div>
    </div>
  </section>
</template>
