<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    class="w-full py-20"
    style="background-color: var(--color-bg);"
    aria-labelledby="testimonials-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-14 flex flex-col items-center text-center">
        <!-- Green pill tag -->
        <span
          class="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style="background-color: rgba(70,206,122,0.12); color: var(--color-primary); font-family: var(--font-sans);"
        >
          ● {{ t('testimonials.tag') }}
        </span>

        <h2
          id="testimonials-heading"
          class="text-[32px] font-black leading-tight tracking-[-0.03em] sm:text-[48px]"
          style="font-family: var(--font-sans); color: var(--color-text);"
        >
          {{ t('testimonials.title') }}
        </h2>
      </div>

      <!-- Placeholder box -->
      <div
        class="mx-auto flex max-w-[1016px] flex-col items-center justify-center rounded-2xl px-10 py-20 text-center"
        style="border: 1.5px dashed var(--color-border);"
      >
        <!-- Large quote marks -->
        <p
          class="mb-4 select-none leading-none"
          style="font-family: var(--font-sans); font-weight: 900; font-size: 72px; color: var(--color-text-muted); line-height: 1;"
          aria-hidden="true"
        >
          ""
        </p>

        <p
          class="text-[18px] font-bold leading-snug"
          style="font-family: var(--font-sans); color: var(--color-text);"
        >
          {{ t('testimonials.placeholder_title') }}
        </p>

        <p
          class="mt-2 text-[14px] font-normal"
          style="font-family: var(--font-sans); color: var(--color-text-muted);"
        >
          {{ t('testimonials.placeholder_subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>
