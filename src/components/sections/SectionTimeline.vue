<script setup lang="ts">
import Timeline from '@/components/ui/Timeline.vue'

const timelineItems = [
  {
    title: 'Briefing',
    description:
      'Entendemos seu negócio, público-alvo e objetivos em uma reunião rápida',
  },
  {
    title: 'Design',
    description:
      'Criamos o visual da sua marca: cores, tipografia e layout que convertem',
  },
  {
    title: 'Desenvolvimento',
    description:
      'Seu site é construído com tecnologia moderna, rápido e responsivo',
  },
  {
    title: 'Revisão',
    description: 'Você aprova cada detalhe antes de publicarmos',
  },
  {
    title: 'Ao ar!',
    description:
      'Publicamos, configuramos domínio, SSL e monitoramos o desempenho',
  },
]
</script>

<template>
  <section class="section-timeline">
    <!-- Header -->
    <div class="section-timeline__header">
      <h2 class="section-timeline__title">Do zero ao ar em dias</h2>
      <p class="section-timeline__subtitle">Nosso processo simples e transparente</p>
    </div>

    <!-- Timeline -->
    <div class="section-timeline__content">
      <Timeline :items="timelineItems" />
    </div>
  </section>
</template>

<style scoped>
.section-timeline {
  padding: 5rem 1.5rem;
  background-color: var(--color-dark);
}

/* On dark background, override the semantic text tokens locally so
   TimelineItem (which uses var(--color-text) / var(--color-text-muted))
   renders with readable colours regardless of the page's light/dark mode. */
.section-timeline {
  --color-text: #f0f6fc;
  --color-text-muted: #8b949e;
  --color-border: #30363d;
}

/* Header */
.section-timeline__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-timeline__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #f0f6fc;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.section-timeline__subtitle {
  font-size: 1.125rem;
  color: #8b949e;
  margin: 0;
  line-height: 1.6;
}

/* Content container */
.section-timeline__content {
  max-width: 640px;
  margin: 0 auto;
}
</style>
