<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
  { value: t('about.stat1_value'), label: t('about.stat1_label') },
  { value: t('about.stat2_value'), label: t('about.stat2_label') },
  { value: t('about.stat3_value'), label: t('about.stat3_label') },
])

const bullets = computed(() => [
  { bold: t('about.bullet1_bold'), text: t('about.bullet1_text') },
  { bold: t('about.bullet2_bold'), text: t('about.bullet2_text') },
  { bold: t('about.bullet3_bold'), text: t('about.bullet3_text') },
])
</script>

<template>
  <section
    id="sobre"
    class="w-full py-20"
    style="background-color: var(--color-bg)"
    aria-labelledby="about-heading"
  >
    <div class="mx-auto max-w-270 px-6">
      <!--
        Desktop: 2-column grid (left = image + stats, right = text)
        Mobile: single column, right content first
      -->
      <div class="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-20">
        <!-- LEFT COLUMN: image placeholder + stats -->
        <div class="flex w-full flex-col gap-5 lg:w-1/2">
          <!-- Image placeholder -->
          <div
            class="flex aspect-4/3 w-full flex-col items-center justify-center gap-3 rounded-3xl"
            style="background-color: rgba(70, 206, 122, 0.12)"
            role="img"
            aria-label="Logo ou imagem da empresa"
          >
            <!-- Monitor icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="color: var(--color-text-muted)"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
              />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
            </svg>
            <span
              class="text-sm"
              style="font-family: var(--font-sans); color: var(--color-text-muted)"
            >
              {{ t('about.image_label') }}
            </span>
          </div>

          <!-- Stat cards row -->
          <div class="flex gap-4">
            <div
              v-for="stat in stats"
              :key="stat.value"
              class="flex flex-1 flex-col gap-0.5 rounded-lg border px-4 py-3"
              style="
                background-color: var(--color-surface);
                border-color: var(--color-border);
              "
            >
              <span
                class="text-2xl font-black leading-tight"
                style="font-family: var(--font-sans); color: var(--color-text)"
              >
                {{ stat.value }}
              </span>
              <span
                class="text-xs leading-snug"
                style="font-family: var(--font-sans); color: var(--color-text-muted)"
              >
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: tag + heading + paragraph + bullets -->
        <div class="flex w-full flex-col lg:w-1/2">
          <!-- Tag -->
          <span
            class="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
            style="
              background-color: rgba(70, 206, 122, 0.12);
              color: var(--color-primary);
              font-family: var(--font-sans);
            "
          >
            <span aria-hidden="true">●</span> {{ t('about.tag') }}
          </span>

          <!-- H2 -->
          <h2
            id="about-heading"
            class="mb-5 text-3xl font-black sm:text-[38px]"
            style="
              font-family: var(--font-display);
              color: var(--color-text);
              letter-spacing: -0.03em;
              line-height: 1.15;
            "
          >
            {{ t('about.title') }}
          </h2>

          <!-- Paragraph -->
          <p
            class="mb-7 text-base"
            style="
              font-family: var(--font-sans);
              color: var(--color-text);
              line-height: 27px;
            "
          >
            {{ t('about.body') }}
          </p>

          <!-- Bullet points -->
          <ul class="flex list-none flex-col gap-4 p-0">
            <li
              v-for="bullet in bullets"
              :key="bullet.bold"
              class="flex items-start gap-3"
            >
              <!-- Green dot -->
              <span
                class="mt-1.25 h-2 w-2 shrink-0 rounded-full"
                style="background-color: var(--color-primary)"
                aria-hidden="true"
              />
              <p
                class="text-base leading-relaxed"
                style="font-family: var(--font-sans); color: var(--color-text)"
              >
                <strong class="font-bold">{{ bullet.bold }}</strong>{{ bullet.text }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
