<script setup lang="ts">
import Card from '@/components/ui/Card.vue'

interface Testimonial {
  quote: string
  name: string
  company: string
  initials: string
  avatarColor: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Em 2 semanas o site estava no ar e em 1 mês já tínhamos 40% mais reservas pelo WhatsApp. Processo muito simples e equipe atenciosa.',
    name: 'Ana Costa',
    company: 'Restaurante Sabor & Arte',
    initials: 'AC',
    avatarColor: '#e57373',
  },
  {
    quote:
      'Precisava de um site que transmitisse confiança. A Duete entendeu exatamente o que a clínica precisava.',
    name: 'Ricardo Melo',
    company: 'Clínica MedVita',
    initials: 'RM',
    avatarColor: '#64b5f6',
  },
  {
    quote:
      'Vendas online subiram 120% no primeiro trimestre após o lançamento. Recomendo demais!',
    name: 'Fernanda Lima',
    company: 'Boutique Araucária',
    initials: 'FL',
    avatarColor: '#ba68c8',
  },
  {
    quote:
      'Profissionalismo em cada etapa. O site ficou exatamente como eu imaginava, só melhor.',
    name: 'Carlos Souza',
    company: 'Construtora Horizonte',
    initials: 'CS',
    avatarColor: '#4db6ac',
  },
  {
    quote: 'O site novo trouxe 80 novos alunos em 3 meses. Vale muito o investimento.',
    name: 'Mariana Pereira',
    company: 'Academia FitLife',
    initials: 'MP',
    avatarColor: '#ffb74d',
  },
]
</script>

<template>
  <section
    class="w-full py-20 sm:py-28"
    :style="{ backgroundColor: 'var(--color-bg-muted)' }"
    aria-labelledby="testimonials-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-14 text-center">
        <h2
          id="testimonials-heading"
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :style="{ color: 'var(--color-text)' }"
        >
          O que os clientes dizem
        </h2>
        <p
          class="mt-4 text-lg"
          :style="{ color: 'var(--color-text-muted)' }"
        >
          Resultados reais de quem confiou na Duete
        </p>
      </div>

      <!-- Testimonials grid: 1 col mobile, 2 col tablet, 3 col desktop -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          variant="testimonial"
        >
          <div class="flex h-full flex-col gap-5">
            <!-- 5-star rating -->
            <div
              class="flex gap-0.5 text-lg leading-none"
              :style="{ color: 'var(--color-primary)' }"
              aria-label="5 estrelas"
              role="img"
            >
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
              <span aria-hidden="true">★</span>
            </div>

            <!-- Quote text -->
            <blockquote
              class="flex-1 text-sm leading-relaxed"
              :style="{ color: 'var(--color-text-muted)' }"
            >
              "{{ testimonial.quote }}"
            </blockquote>

            <!-- Avatar + name + company -->
            <div class="flex items-center gap-3">
              <!-- Colored circle avatar with initials -->
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                :style="{ backgroundColor: testimonial.avatarColor }"
                aria-hidden="true"
              >
                {{ testimonial.initials }}
              </div>
              <div>
                <p
                  class="text-sm font-semibold leading-tight"
                  :style="{ color: 'var(--color-text)' }"
                >
                  {{ testimonial.name }}
                </p>
                <p
                  class="text-xs leading-tight"
                  :style="{ color: 'var(--color-text-muted)' }"
                >
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
