<script setup lang="ts">
import Accordion from '@/components/ui/Accordion.vue'

const faqItems = [
  {
    question: 'Quanto tempo leva para meu site ficar pronto?',
    answer:
      'Em média 10 a 15 dias úteis após aprovação do briefing. Projetos mais complexos podem levar até 30 dias.',
  },
  {
    question: 'Preciso ter um domínio antes de contratar?',
    answer: 'Não. Ajudamos você a escolher e registrar o domínio ideal para seu negócio.',
  },
  {
    question: 'O site funciona no celular?',
    answer:
      'Sim, todos os nossos sites são 100% responsivos e testados em diferentes dispositivos e navegadores.',
  },
  {
    question: 'Posso editar o site depois?',
    answer:
      'Sim. Entregamos com painel administrativo intuitivo e treinamos você para fazer atualizações simples.',
  },
  {
    question: 'Quais formas de pagamento?',
    answer:
      'Aceitamos PIX, boleto e cartão de crédito em até 12x. Consulte condições especiais para pagamento à vista.',
  },
  {
    question: 'O que acontece depois da entrega?',
    answer:
      'Oferecemos 30 dias de suporte gratuito após a entrega. Após isso, planos mensais de manutenção a partir de R$97/mês.',
  },
]
</script>

<template>
  <section
    id="faq"
    class="py-20 sm:py-28"
    :style="{ backgroundColor: 'var(--color-bg)' }"
    aria-labelledby="faq-title"
  >
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-12 text-center">
        <h2
          id="faq-title"
          class="text-3xl font-bold tracking-tight sm:text-4xl"
          :style="{ color: 'var(--color-text)' }"
        >
          Perguntas frequentes
        </h2>
        <p
          class="mt-4 text-lg"
          :style="{ color: 'var(--color-text-muted)' }"
        >
          Tire suas dúvidas antes de começar
        </p>
      </div>

      <!-- Accordion -->
      <div
        class="rounded-2xl border px-6"
        :style="{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
        }"
      >
        <Accordion :items="faqItems" :multiple="false" />
      </div>
    </div>
  </section>
</template>
