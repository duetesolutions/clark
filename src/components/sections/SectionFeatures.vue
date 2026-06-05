<script setup lang="ts">
import Card from '@/components/ui/Card.vue'

const metrics = [
  {
    metric: '3x',
    title: 'Mais leads',
    description: 'Sites otimizados para conversão geram em média 3x mais contatos qualificados',
  },
  {
    metric: '98%',
    title: 'Clientes satisfeitos',
    description: 'Nossa taxa de satisfação após entrega dos projetos',
  },
  {
    metric: '<2s',
    title: 'Velocidade de carregamento',
    description: 'Performance acima da média do mercado, aprovada pelo Google',
  },
  {
    metric: '500+',
    title: 'Projetos entregues',
    description: 'Desde 2019 ajudando negócios brasileiros a crescerem online',
  },
]

const whyUs = [
  {
    title: 'Entrega rápida',
    description: 'Do briefing ao ar em até 15 dias úteis',
    icon: 'rocket',
  },
  {
    title: 'Suporte contínuo',
    description: 'Não desaparecemos após a entrega',
    icon: 'shield',
  },
  {
    title: 'Estratégia inclusa',
    description: 'Orientamos você além do desenvolvimento',
    icon: 'lightbulb',
  },
]
</script>

<template>
  <section
    class="w-full py-20 sm:py-28"
    :style="{ backgroundColor: 'var(--color-bg)' }"
    aria-labelledby="features-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-14 text-center">
        <h2
          id="features-heading"
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :style="{ color: 'var(--color-text)' }"
        >
          Soluções digitais que geram resultados
        </h2>
        <p
          class="mt-4 text-lg"
          :style="{ color: 'var(--color-text-muted)' }"
        >
          Números reais de projetos reais
        </p>
      </div>

      <!-- 2×2 metric cards grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card
          v-for="item in metrics"
          :key="item.title"
          variant="feature"
        >
          <div class="flex flex-col gap-2">
            <span
              class="text-5xl font-extrabold leading-none tracking-tight"
              :style="{ color: 'var(--color-primary)' }"
              aria-hidden="true"
            >
              {{ item.metric }}
            </span>
            <h3
              class="text-lg font-bold"
              :style="{ color: 'var(--color-text)' }"
            >
              {{ item.title }}
            </h3>
            <p
              class="text-sm leading-relaxed"
              :style="{ color: 'var(--color-text-muted)' }"
            >
              {{ item.description }}
            </p>
          </div>
        </Card>
      </div>

      <!-- "Por que nos escolher?" secondary section -->
      <div
        class="mt-20 rounded-2xl px-6 py-12 sm:px-10"
        :style="{ backgroundColor: 'var(--color-bg-muted)', border: '1px solid var(--color-border)' }"
      >
        <h2
          class="mb-10 text-center text-2xl font-bold tracking-tight sm:text-3xl"
          :style="{ color: 'var(--color-text)' }"
        >
          Por que nos escolher?
        </h2>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            v-for="item in whyUs"
            :key="item.title"
            class="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left"
          >
            <!-- Rocket icon -->
            <span
              v-if="item.icon === 'rocket'"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: 'var(--color-primary-pale)', color: 'var(--color-primary)' }"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </span>

            <!-- Shield icon -->
            <span
              v-else-if="item.icon === 'shield'"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: 'var(--color-primary-pale)', color: 'var(--color-primary)' }"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>

            <!-- Lightbulb icon -->
            <span
              v-else-if="item.icon === 'lightbulb'"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: 'var(--color-primary-pale)', color: 'var(--color-primary)' }"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </span>

            <div>
              <h3
                class="text-base font-bold"
                :style="{ color: 'var(--color-text)' }"
              >
                {{ item.title }}
              </h3>
              <p
                class="mt-1 text-sm leading-relaxed"
                :style="{ color: 'var(--color-text-muted)' }"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
