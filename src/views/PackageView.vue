<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import SectionFooter from '@/components/sections/SectionFooter.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Timeline from '@/components/ui/Timeline.vue'
import Accordion from '@/components/ui/Accordion.vue'

const route = useRoute()
const router = useRouter()
const { t, tm } = useI18n()

const SLUG_TO_KEY: Record<string, string> = {
  portfolio: 'portfolio',
  'landing-page': 'landing',
}

const packageKey = computed(() => SLUG_TO_KEY[route.params.slug as string] ?? null)

watch(
  packageKey,
  (key) => {
    if (!key) router.replace('/')
  },
  { immediate: true },
)

const features = computed((): string[] => {
  if (!packageKey.value) return []
  return tm(`package.${packageKey.value}.features`) as string[]
})

const timeline = computed(
  (): Array<{ step: string; title: string; description: string }> => {
    if (!packageKey.value) return []
    return tm(`package.${packageKey.value}.timeline`) as Array<{
      step: string
      title: string
      description: string
    }>
  },
)

const faqItems = computed(
  (): Array<{ question: string; answer: string }> => {
    if (!packageKey.value) return []
    return tm(`package.${packageKey.value}.faq`) as Array<{
      question: string
      answer: string
    }>
  },
)
</script>

<template>
  <SectionNavbar />
  <main v-if="packageKey" class="package-view">
    <section class="package-hero">
      <div class="package-container">
        <RouterLink to="/#servicos" class="package-back-link">
          {{ t('package.back') }}
        </RouterLink>
        <span class="package-tag">
          <span class="package-tag__dot" aria-hidden="true" />
          {{ t(`package.${packageKey}.tag`) }}
        </span>
        <h1 class="package-hero__title">
          {{ t(`package.${packageKey}.name`) }}
        </h1>
        <p class="package-hero__subtitle">
          {{ t(`package.${packageKey}.subtitle`) }}
        </p>
        <div class="package-hero__price">
          <span class="package-hero__price-from">{{ t('package.price_from') }}</span>
          <span class="package-hero__price-value">
            {{ t(`package.${packageKey}.price`) }}
          </span>
        </div>
        <RouterLink to="/#contato">
          <Button variant="primary" size="lg">
            {{ t('package.cta_button') }}
          </Button>
        </RouterLink>
      </div>
    </section>
    <section class="package-features">
      <div class="package-container">
        <h2 class="package-section-label">{{ t('package.includes_title') }}</h2>
        <div class="package-features__grid">
          <Card
            v-for="(feature, index) in features"
            :key="index"
            variant="feature"
            class="package-feature-item"
          >
            <span class="package-feature-item__check" aria-hidden="true">✓</span>
            <span class="package-feature-item__text">{{ feature }}</span>
          </Card>
        </div>
      </div>
    </section>
    <section class="package-process">
      <div class="package-container">
        <h2 class="package-section-label">{{ t('package.process_title') }}</h2>
        <Timeline :items="timeline" />
      </div>
    </section>
    <section class="package-faq">
      <div class="package-container">
        <h2 class="package-section-label">{{ t('package.faq_title') }}</h2>
        <Accordion :items="faqItems" />
      </div>
    </section>
    <section class="package-cta">
      <div class="package-container package-cta__inner">
        <h2 class="package-cta__title">{{ t('package.cta_title') }}</h2>
        <p class="package-cta__subtitle">{{ t('package.cta_subtitle') }}</p>
        <RouterLink to="/#contato">
          <Button variant="primary" size="lg">
            {{ t('package.cta_button') }}
          </Button>
        </RouterLink>
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
  max-width: 72rem;
  padding-inline: 1rem;
}
@media (min-width: 640px) {
  .package-container { padding-inline: 1.5rem; }
}
@media (min-width: 1024px) {
  .package-container { padding-inline: 2rem; }
}
.package-hero {
  padding-block: 5rem;
  border-bottom: 1px solid var(--color-border);
}
.package-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 200ms ease;
}
.package-back-link:hover { color: var(--color-primary); }
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
}
.package-hero__subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 42rem;
  margin: 0 0 2rem;
}
.package-hero__price {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
}
.package-hero__price-from {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.package-hero__price-value {
  font-family: var(--font-sans);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1.1;
}
.package-features,
.package-process,
.package-faq {
  padding-block: 5rem;
  border-bottom: 1px solid var(--color-border);
}
.package-cta { padding-block: 5rem; }
.package-cta__inner { text-align: center; }
.package-section-label {
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border-top: 2px solid var(--color-primary);
  padding-top: 1rem;
  margin: 0 0 2.5rem;
}
.package-features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .package-features__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .package-features__grid { grid-template-columns: repeat(3, 1fr); }
}
.package-feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.package-feature-item__check {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}
.package-feature-item__text {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--color-text);
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
  max-width: 36rem;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
</style>
