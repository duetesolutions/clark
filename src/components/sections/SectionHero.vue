<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/ui/Button.vue'

const { t } = useI18n()

// 13 columns × 8 rows dot grid
const DOT_COLS = 13
const DOT_ROWS = 8

const heroTags = computed(() => [t('hero.tag1'), t('hero.tag2'), t('hero.tag3')])
</script>

<template>
  <section
    class="relative overflow-hidden"
    style="
      background-color: #132227;
      min-height: 640px;
      padding-top: 80px;
    "
    aria-labelledby="hero-headline"
  >
    <!-- Decorative circle 1: large, top-right -->
    <div
      class="pointer-events-none absolute rounded-full"
      style="
        width: 700px;
        height: 700px;
        top: -250px;
        right: 0;
        background: radial-gradient(circle at 50% 50%, rgba(232,250,240,1) 0%, rgba(0,0,0,0) 70%);
        opacity: 0.08;
        border-radius: 50%;
      "
      aria-hidden="true"
    />

    <!-- Decorative circle 2: small, bottom-left -->
    <div
      class="pointer-events-none absolute rounded-full"
      style="
        width: 350px;
        height: 350px;
        bottom: -100px;
        left: -100px;
        background: radial-gradient(circle at 50% 50%, rgba(232,250,240,1) 0%, rgba(0,0,0,0) 70%);
        opacity: 0.08;
        border-radius: 50%;
      "
      aria-hidden="true"
    />

    <!-- Dots grid: 13×8, top-right -->
    <div
      class="pointer-events-none absolute"
      style="
        top: 100px;
        right: 48px;
        width: 242px;
        height: 94px;
        opacity: 0.2;
      "
      aria-hidden="true"
    >
      <div
        class="grid"
        :style="{
          gridTemplateColumns: `repeat(${DOT_COLS}, 4px)`,
          gridTemplateRows: `repeat(${DOT_ROWS}, 4px)`,
          gap: '11.5px 11.5px',
        }"
      >
        <span
          v-for="i in DOT_COLS * DOT_ROWS"
          :key="i"
          class="block rounded-xs"
          style="width:4px; height:4px; background-color:#3AB86B;"
        />
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 mx-auto max-w-270 px-6">
      <div
        class="flex flex-col"
        style="max-width:760px; padding-top:64px; padding-bottom:96px;"
      >
        <!-- Badge -->
        <div class="flex">
          <span
            class="inline-flex items-center gap-2 rounded-full"
            style="
              background: rgba(70,206,122,0.12);
              border: 1px solid rgba(70,206,122,0.25);
              border-radius: 100px;
              padding: 5px 12px 5px 10px;
            "
          >
            <!-- Green dot -->
            <span
              class="block rounded-full shrink-0"
              style="width:4px; height:4px; background-color:#46CE7A;"
              aria-hidden="true"
            />
            <span
              style="
                font-family: var(--font-display);
                font-weight: 600;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.10em;
                color: #46CE7A;
              "
            >{{ t('hero.badge') }}</span>
          </span>
        </div>

        <!-- H1 -->
        <h1
          id="hero-headline"
          class="mt-6"
          style="
            font-family: var(--font-sans);
            font-weight: 900;
            font-size: clamp(48px, 6vw, 80px);
            line-height: clamp(50.4px, 6.3vw, 84px);
            letter-spacing: -0.03em;
            color: #ffffff;
            margin: 0;
            margin-top: 24px;
          "
        >
          {{ t('hero.title') }}
          <span style="color:#3AB86B;"> {{ t('hero.title_accent') }}</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="mt-4"
          style="
            font-family: var(--font-sans);
            font-weight: 400;
            font-size: 16px;
            line-height: 27.2px;
            color: rgba(255,255,255,0.5);
            max-width: 560px;
            margin-top: 16px;
          "
        >
          {{ t('hero.subtitle') }}
        </p>

        <!-- Buttons row -->
        <div class="flex flex-wrap items-center" style="gap:16px; margin-top:32px;">
          <a href="#contato">
            <Button variant="primary" size="md" class="rounded-full!">
              {{ t('hero.cta1') }}
            </Button>
          </a>
          <a
            href="#servicos"
            class="inline-flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2"
            style="
              font-family: var(--font-sans);
              font-weight: 500;
              font-size: 16px;
              color: rgba(255,255,255,0.7);
              text-decoration: none;
              gap: 6px;
              --tw-ring-color: var(--color-primary);
            "
            @mouseover="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')"
            @mouseleave="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)')"
          >
            {{ t('hero.cta2') }}
          </a>
        </div>

        <!-- Tags row -->
        <div class="flex flex-wrap items-center" style="gap:12px; margin-top:24px;">
          <span
            v-for="tag in heroTags"
            :key="tag"
            class="inline-flex items-center gap-1.5 rounded-full"
            style="
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.12);
              padding: 5px 12px 5px 10px;
            "
          >
            <span
              class="block rounded-full shrink-0"
              style="width:5px; height:5px; background-color:#46CE7A;"
              aria-hidden="true"
            />
            <span
              style="
                font-family: var(--font-sans);
                font-size: 13px;
                color: rgba(255,255,255,0.6);
              "
            >{{ tag }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
