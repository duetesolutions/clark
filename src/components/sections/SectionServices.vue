<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section
    id="servicos"
    aria-labelledby="services-heading"
    :style="{ backgroundColor: 'var(--color-bg)' }"
    class="w-full py-20 md:py-24"
  >
    <div class="mx-auto w-full max-w-270 px-6">

      <!-- ─────────── Header ─────────── -->
      <div class="mb-14 flex flex-col items-center gap-4 text-center">
        <!-- Tag pill -->
        <span
          class="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          :style="{
            backgroundColor: 'rgba(70,206,122,0.12)',
            border: '1px solid rgba(70,206,122,0.25)',
            borderRadius: '100px',
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-display)',
            fontWeight: '600',
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }"
        >
          <span
            class="inline-block h-1.5 w-1.5 rounded-full"
            :style="{ backgroundColor: 'var(--color-primary)' }"
            aria-hidden="true"
          />
          {{ t('services.tag') }}
        </span>

        <!-- H2 -->
        <h2
          id="services-heading"
          class="text-3xl sm:text-5xl"
          :style="{
            fontFamily: 'var(--font-sans)',
            fontWeight: '900',
            color: 'var(--color-text)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          }"
        >
          {{ t('services.title') }}
        </h2>

        <!-- Subtitle -->
        <p
          :style="{
            fontFamily: 'var(--font-sans)',
            fontWeight: '400',
            fontSize: '16px',
            color: 'var(--color-text-muted)',
          }"
        >
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- ─────────── Group 1: Sites e Aplicações ─────────── -->
      <div class="mb-10">
        <!-- Group label -->
        <div
          class="mb-5 pt-4"
          :style="{ borderTop: '2px solid var(--color-primary)' }"
        >
          <span
            :style="{
              fontFamily: 'var(--font-display)',
              fontWeight: '600',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }"
          >
            {{ t('services.group_sites') }}
          </span>
        </div>

        <!-- Two cards -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

          <!-- Card A: Portfólio (light) -->
          <div
            class="service-card flex flex-col gap-5 rounded-xl p-8"
            :style="{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
            }"
          >
            <!-- Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-primary)"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '20px',
                color: 'var(--color-text)',
                margin: '0',
              }"
            >
              {{ t('services.card_portfolio_name') }}
            </h3>

            <!-- Description -->
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                margin: '0',
              }"
            >
              {{ t('services.card_portfolio_desc') }}
            </p>

            <!-- Price -->
            <div class="mt-auto flex flex-col gap-0.5">
              <span
                :style="{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                }"
              >
                {{ t('services.price_from') }}
              </span>
              <span
                :style="{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '900',
                  fontSize: '24px',
                  color: 'var(--color-text)',
                  lineHeight: '1.2',
                }"
              >
                {{ t('services.card_portfolio_price') }}
              </span>
            </div>

            <!-- Link -->
            <a
              href="#"
              class="group inline-flex items-center gap-1 text-sm hover:underline"
              :style="{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
              }"
            >
              {{ t('services.details_link') }}
            </a>
          </div>

          <!-- Card B: Landing Page Pro (dark / highlighted) -->
          <div
            class="service-card relative flex flex-col gap-5 rounded-xl p-8"
            style="background-color: #20272f; border-radius: 12px;"
          >
            <!-- MAIS POPULAR badge -->
            <span
              class="absolute right-6 top-6 rounded-full px-3 py-1"
              :style="{
                backgroundColor: 'var(--color-primary)',
                color: '#132227',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                fontSize: '11px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }"
            >
              {{ t('services.badge_popular') }}
            </span>

            <!-- Icon -->
            <div
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg"
              style="background-color: rgba(70,206,122,0.15);"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="var(--color-primary)"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '20px',
                color: '#ffffff',
                margin: '0',
              }"
            >
              {{ t('services.card_landing_name') }}
            </h3>

            <!-- Description -->
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.6',
                margin: '0',
              }"
            >
              {{ t('services.card_landing_desc') }}
            </p>

            <!-- Price -->
            <div class="mt-auto flex flex-col gap-0.5">
              <span
                :style="{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                }"
              >
                {{ t('services.price_from') }}
              </span>
              <span
                :style="{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '900',
                  fontSize: '24px',
                  color: 'var(--color-primary)',
                  lineHeight: '1.2',
                }"
              >
                {{ t('services.card_landing_price') }}
              </span>
            </div>

            <!-- Link -->
            <a
              href="#"
              class="inline-flex items-center gap-1 text-sm hover:underline"
              :style="{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
              }"
            >
              {{ t('services.details_link') }}
            </a>
          </div>

        </div>
      </div>

      <!-- ─────────── Group 2: MVPs ─────────── -->
      <div class="mb-10">
        <!-- Group label -->
        <div
          class="mb-5 pt-4"
          :style="{ borderTop: '2px solid var(--color-primary)' }"
        >
          <span
            :style="{
              fontFamily: 'var(--font-display)',
              fontWeight: '600',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }"
          >
            {{ t('services.group_mvps') }}
          </span>
        </div>

        <!-- 1 full-width card -->
        <div
          class="service-card flex flex-col items-start gap-5 rounded-xl p-8 sm:flex-row sm:items-center"
          :style="{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
          }"
        >
          <!-- Icon -->
          <div class="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-primary)"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3
              class="mb-2"
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '20px',
                color: 'var(--color-text)',
                margin: '0 0 8px',
              }"
            >
              {{ t('services.card_mvp_name') }}
            </h3>
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                margin: '0',
              }"
            >
              {{ t('services.card_mvp_desc') }}
            </p>
          </div>

          <!-- Price: Sob consulta -->
          <div class="shrink-0">
            <span
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                whiteSpace: 'nowrap',
              }"
            >
              {{ t('services.price_custom') }}
            </span>
          </div>
        </div>
      </div>

      <!-- ─────────── Group 3: Em Breve ─────────── -->
      <div>
        <!-- Group label -->
        <div
          class="mb-5 pt-4"
          style="border-top: 2px solid #F59E0B;"
        >
          <span
            :style="{
              fontFamily: 'var(--font-display)',
              fontWeight: '600',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#F59E0B',
            }"
          >
            {{ t('services.group_soon') }}
          </span>
        </div>

        <!-- 3 cards in a row -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

          <!-- Card 1: Produção de Vídeo -->
          <div
            class="service-card flex flex-col gap-4 rounded-xl p-6"
            :style="{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
            }"
          >
            <!-- Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-text-muted)"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '16px',
                color: 'var(--color-text)',
                margin: '0',
              }"
            >
              {{ t('services.soon_video') }}
            </h3>

            <!-- Description -->
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                margin: '0',
                flex: '1',
              }"
            >
              {{ t('services.soon_video_desc') }}
            </p>

            <!-- Badge -->
            <span
              class="mt-1 inline-flex w-fit rounded-full px-3 py-1"
              style="
                background-color: rgba(245,158,11,0.1);
                color: #F59E0B;
                border: 1px solid rgba(245,158,11,0.3);
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
              "
            >
              {{ t('services.badge_soon') }}
            </span>
          </div>

          <!-- Card 2: Posts para Instagram -->
          <div
            class="service-card flex flex-col gap-4 rounded-xl p-6"
            :style="{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
            }"
          >
            <!-- Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-text-muted)"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '16px',
                color: 'var(--color-text)',
                margin: '0',
              }"
            >
              {{ t('services.soon_instagram') }}
            </h3>

            <!-- Description -->
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                margin: '0',
                flex: '1',
              }"
            >
              {{ t('services.soon_instagram_desc') }}
            </p>

            <!-- Badge -->
            <span
              class="mt-1 inline-flex w-fit rounded-full px-3 py-1"
              style="
                background-color: rgba(245,158,11,0.1);
                color: #F59E0B;
                border: 1px solid rgba(245,158,11,0.3);
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
              "
            >
              {{ t('services.badge_soon') }}
            </span>
          </div>

          <!-- Card 3: Marketing Digital -->
          <div
            class="service-card flex flex-col gap-4 rounded-xl p-6"
            :style="{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
            }"
          >
            <!-- Icon -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-text-muted)"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>

            <!-- Title -->
            <h3
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '16px',
                color: 'var(--color-text)',
                margin: '0',
              }"
            >
              {{ t('services.soon_marketing') }}
            </h3>

            <!-- Description -->
            <p
              :style="{
                fontFamily: 'var(--font-sans)',
                fontWeight: '400',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                margin: '0',
                flex: '1',
              }"
            >
              {{ t('services.soon_marketing_desc') }}
            </p>

            <!-- Badge -->
            <span
              class="mt-1 inline-flex w-fit rounded-full px-3 py-1"
              style="
                background-color: rgba(245,158,11,0.1);
                color: #F59E0B;
                border: 1px solid rgba(245,158,11,0.3);
                font-size: 11px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
              "
            >
              {{ t('services.badge_soon') }}
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.service-card {
  position: relative;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms ease;
  border-radius: 3px 3px 0 0;
  z-index: 1;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.service-card:hover::before {
  transform: scaleX(1);
}
</style>
