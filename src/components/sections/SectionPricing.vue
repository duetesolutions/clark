<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  tagline: string
  features: string[]
  buttonLabel: string
  buttonVariant: 'primary' | 'ghost'
  highlighted: boolean
  badge?: string
}

const plans: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 'R$0',
    period: '/mês',
    tagline: 'Para quem está começando',
    features: [
      'Landing page 1 página',
      'Domínio grátis 1 ano',
      'SSL incluso',
      'Suporte por e-mail',
    ],
    buttonLabel: 'Começar grátis',
    buttonVariant: 'ghost',
    highlighted: false,
  },
  {
    id: 'profissional',
    name: 'Profissional',
    price: 'R$297',
    period: '/mês',
    tagline: 'Para negócios que querem crescer',
    features: [
      'Até 5 páginas',
      'Blog',
      'Integração WhatsApp',
      'SEO básico',
      'Suporte prioritário',
      'Analytics',
    ],
    buttonLabel: 'Escolher plano',
    buttonVariant: 'primary',
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$597',
    period: '/mês',
    tagline: 'Para quem quer resultados acima da média',
    features: [
      'Páginas ilimitadas',
      'E-commerce',
      'Automações',
      'SEO avançado',
      'Relatórios mensais',
      'Suporte dedicado',
      'Reuniões mensais',
    ],
    buttonLabel: 'Escolher premium',
    buttonVariant: 'primary',
    highlighted: true,
    badge: 'Mais popular',
  },
]
</script>

<template>
  <section class="section-pricing">
    <!-- Header -->
    <div class="section-pricing__header">
      <h2 class="section-pricing__title">Escolha seu plano</h2>
      <p class="section-pricing__subtitle">Transparência e valor real desde o início</p>
    </div>

    <!-- Grid -->
    <div class="section-pricing__grid">
      <div
        v-for="plan in plans"
        :key="plan.id"
        :class="['section-pricing__card-wrapper', { 'section-pricing__card-wrapper--highlighted': plan.highlighted }]"
      >
        <Card variant="pricing" :highlighted="plan.highlighted">
          <!-- Badge -->
          <div v-if="plan.badge" class="section-pricing__badge-row">
            <span class="section-pricing__badge">{{ plan.badge }}</span>
          </div>
          <!-- Empty spacer for non-highlighted cards to keep alignment -->
          <div v-else class="section-pricing__badge-spacer" aria-hidden="true" />

          <!-- Plan name -->
          <h3 class="section-pricing__plan-name">{{ plan.name }}</h3>

          <!-- Price -->
          <div class="section-pricing__price-row">
            <span class="section-pricing__price">{{ plan.price }}</span>
            <span class="section-pricing__period">{{ plan.period }}</span>
          </div>

          <!-- Tagline -->
          <p class="section-pricing__tagline">{{ plan.tagline }}</p>

          <!-- Divider -->
          <div class="section-pricing__divider" />

          <!-- Features -->
          <ul class="section-pricing__features">
            <li
              v-for="(feature, i) in plan.features"
              :key="i"
              class="section-pricing__feature"
            >
              <span class="section-pricing__check" aria-hidden="true">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="section-pricing__cta">
            <Button :variant="plan.buttonVariant" size="md" class="section-pricing__button">
              {{ plan.buttonLabel }}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-pricing {
  padding: 5rem 1.5rem;
  background-color: var(--color-bg);
}

/* Header */
.section-pricing__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-pricing__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.section-pricing__subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
}

/* Grid */
.section-pricing__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
}

@media (min-width: 1024px) {
  .section-pricing__grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}

/* Card wrapper — highlighted card gets extra vertical scale on desktop */
.section-pricing__card-wrapper {
  height: 100%;
}

@media (min-width: 1024px) {
  .section-pricing__card-wrapper--highlighted {
    transform: scale(1.04);
    z-index: 1;
    position: relative;
  }
}

/* Badge row */
.section-pricing__badge-row {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  min-height: 1.75rem;
}

.section-pricing__badge-spacer {
  min-height: 1.75rem;
  margin-bottom: 1rem;
}

.section-pricing__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 700;
  background-color: var(--color-primary);
  color: var(--color-dark);
  letter-spacing: 0.02em;
}

/* Plan name */
.section-pricing__plan-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1rem;
}

/* Price */
.section-pricing__price-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.section-pricing__price {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1;
}

.section-pricing__period {
  font-size: 1rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Tagline */
.section-pricing__tagline {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin: 0 0 1.5rem;
  line-height: 1.5;
}

/* Divider */
.section-pricing__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-border);
  margin-bottom: 1.5rem;
}

/* Features */
.section-pricing__features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
}

.section-pricing__feature {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.5;
}

.section-pricing__check {
  flex-shrink: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.5;
}

/* CTA */
.section-pricing__cta {
  display: flex;
  justify-content: center;
}

.section-pricing__button {
  width: 100%;
}
</style>
