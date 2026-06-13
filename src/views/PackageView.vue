<script setup lang="ts">
import SectionFooter from '@/components/sections/SectionFooter.vue'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Timeline from '@/components/ui/Timeline.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const items = computed(
  (): Array<{ label: string; status: string }> =>
    tm('package.items') as Array<{ label: string; status: string }>,
)

const maintenanceItems = computed(
  (): string[] => tm('package.maintenance_items') as string[],
)

const timeline = computed(
  (): Array<{
    step: string
    label: string
    title: string
    description: string
  }> =>
    tm('package.timeline') as Array<{
      step: string
      label: string
      title: string
      description: string
    }>,
)

const terms = computed(
  (): Array<{ term: string; desc: string }> =>
    tm('package.terms') as Array<{ term: string; desc: string }>,
)
</script>

<template>
  <SectionNavbar :back-link="true" />
  <main class="package-view">
    <section class="package-hero">
      <div class="package-container">
        <span class="package-tag">
          <span class="package-tag__dot" aria-hidden="true" />
          {{ t('package.tag') }}
        </span>
        <h1 class="package-hero__title">{{ t('package.title') }}</h1>
        <p class="package-hero__subtitle">{{ t('package.subtitle') }}</p>

        <div class="package-prices">
          <Card variant="default" class="package-price">
            <span class="package-price__label">{{
              t('package.price_setup_label')
            }}</span>
            <span class="package-price__value">{{
              t('package.price_setup_value')
            }}</span>
            <span class="package-price__note">{{
              t('package.price_setup_note')
            }}</span>
          </Card>
          <Card variant="default" class="package-price">
            <span class="package-price__label">{{
              t('package.price_maintenance_label')
            }}</span>
            <span class="package-price__value package-price__value--muted">
              {{ t('package.price_maintenance_value') }}
            </span>
            <span class="package-price__note">{{
              t('package.price_maintenance_note')
            }}</span>
          </Card>
        </div>
      </div>
    </section>

    <section class="package-section">
      <div class="package-container">
        <span class="package-eyebrow">{{ t('package.includes_tag') }}</span>
        <h2 class="package-section__title">
          {{ t('package.includes_title') }}
        </h2>
        <div class="package-table">
          <div class="package-table__head">
            <span>{{ t('package.col_item') }}</span>
            <span>{{ t('package.col_status') }}</span>
          </div>
          <div
            v-for="(item, index) in items"
            :key="index"
            class="package-table__row"
          >
            <span class="package-table__item">{{ item.label }}</span>
            <span
              class="package-status"
              :class="
                item.status === 'included'
                  ? 'package-status--on'
                  : 'package-status--off'
              "
            >
              <span class="package-status__dot" aria-hidden="true" />
              {{
                item.status === 'included'
                  ? t('package.status_included')
                  : t('package.status_tbd')
              }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="package-section">
      <div class="package-container">
        <span class="package-eyebrow">{{ t('package.maintenance_tag') }}</span>
        <h2 class="package-section__title">
          {{ t('package.maintenance_title') }}
        </h2>
        <p class="package-section__subtitle">
          {{ t('package.maintenance_subtitle') }}
        </p>
        <ul class="package-list">
          <li
            v-for="(line, index) in maintenanceItems"
            :key="index"
            class="package-list__item"
          >
            <span class="package-list__dot" aria-hidden="true" />
            <span class="package-list__text">{{ line }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="package-section">
      <div class="package-container">
        <span class="package-eyebrow">{{ t('package.process_tag') }}</span>
        <h2 class="package-section__title">{{ t('package.process_title') }}</h2>
        <Timeline :items="timeline" />
        <div class="package-warning" role="note">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="package-warning__icon"
            aria-hidden="true"
          >
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p class="package-warning__text">
            <strong>{{ t('package.warning_label') }}</strong>
            {{ t('package.warning_text') }}
          </p>
        </div>
      </div>
    </section>

    <section class="package-section">
      <div class="package-container">
        <span class="package-eyebrow">{{ t('package.terms_tag') }}</span>
        <h2 class="package-section__title">{{ t('package.terms_title') }}</h2>
        <dl class="package-terms">
          <div
            v-for="(row, index) in terms"
            :key="index"
            class="package-terms__row"
          >
            <dt class="package-terms__term">{{ row.term }}</dt>
            <dd class="package-terms__desc">{{ row.desc }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="package-cta">
      <div class="package-container">
        <Card variant="default" class="package-cta__card">
          <h2 class="package-cta__title">{{ t('package.cta_title') }}</h2>
          <p class="package-cta__subtitle">{{ t('package.cta_subtitle') }}</p>
          <RouterLink to="/#contato">
            <Button variant="primary" size="lg">{{
              t('package.cta_button')
            }}</Button>
          </RouterLink>
        </Card>
      </div>
    </section>
  </main>
  <SectionFooter />
</template>

<style scoped>
.package-view {
  padding-top: 80px;
  background-color: var(--color-bg);
}

.package-container {
  margin-inline: auto;
  max-width: 64rem;
  padding-inline: 1rem;
}

@media (min-width: 640px) {
  .package-container {
    padding-inline: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .package-container {
    padding-inline: 2rem;
  }
}

.package-hero {
  padding-block: 5rem 4rem;
  border-bottom: 1px solid var(--color-border);
}

.package-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 100px;
  background-color: color-mix(in srgb, var(--color-primary) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-primary) 25%, transparent);
  color: var(--color-primary);
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.package-tag__dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: var(--color-primary);
}

.package-hero__title {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
  max-width: 38rem;
}

.package-hero__subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 36rem;
  margin: 0 0 2.5rem;
}

.package-prices {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .package-prices {
    grid-template-columns: repeat(2, 1fr);
  }
}

.package-price {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.package-price__label {
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.package-price__value {
  font-family: var(--font-sans);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1.1;
}

.package-price__value--muted {
  color: var(--color-text);
}

.package-price__note {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.package-section {
  padding-block: 4rem;
  border-bottom: 1px solid var(--color-border);
}

.package-eyebrow {
  display: block;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.package-section__title {
  font-family: var(--font-sans);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 0 2rem;
}

.package-section__subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 36rem;
  margin: -1.25rem 0 2rem;
}

.package-table {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.package-table__head,
.package-table__row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.5rem;
}

.package-table__head {
  background-color: var(--color-bg-muted);
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.package-table__row {
  border-top: 1px solid var(--color-border);
}

.package-table__item {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-text);
}

.package-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
}

.package-status--on {
  color: var(--color-primary);
}

.package-status--off {
  color: var(--color-text-muted);
}

.package-status__dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background-color: currentColor;
}

.package-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.package-list__item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.package-list__dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background-color: var(--color-primary);
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.package-list__text {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
}

.package-warning {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  background-color: color-mix(in srgb, #f59e0b 10%, transparent);
  border: 1px solid color-mix(in srgb, #f59e0b 35%, transparent);
}

.package-warning__icon {
  color: #f59e0b;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.package-warning__text {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
}

.package-warning__text strong {
  color: #f59e0b;
  font-weight: 700;
}

.package-terms {
  margin: 0;
}

.package-terms__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--color-border);
}

.package-terms__row:first-child {
  border-top: none;
  padding-top: 0;
}

@media (min-width: 640px) {
  .package-terms__row {
    grid-template-columns: 12rem 1fr;
    gap: 1.5rem;
  }
}

.package-terms__term {
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.package-terms__desc {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

.package-cta {
  padding-block: 4rem 5rem;
}

.package-cta__card {
  text-align: center;
  padding-block: 3rem;
}

.package-cta__title {
  font-family: var(--font-sans);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
}

.package-cta__subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 32rem;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
</style>
