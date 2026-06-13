# Pacote de Entrada — Package Detail Page

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a routed package detail page (adapting the
`Pacote de Entrada (standalone).html` prototype) reachable from the "Ver
detalhes do pacote →" links in SectionServices.

**Architecture:** Install vue-router; refactor App.vue into a thin RouterView
shell with HomeView.vue holding current content; create PackageView.vue at
`/pacotes/:slug` using existing UI components (Card, Timeline, Accordion,
Button) and CSS variables — no inline styles; add i18n keys for both packages
(portfolio + landing-page).

**Tech Stack:** Vue 3 + Composition API, vue-router 4, vue-i18n 11, Tailwind v4,
vitest + @vue/test-utils 2, happy-dom

**Design reference:** Open `Pacote de Entrada (standalone).html` in a browser
before implementing PackageView.vue. The prototype uses the same green (#46ce7a)
and dark (#20272F) palette already in the project's CSS variables.

---

### Task 1: Install dependencies + configure Vitest DOM environment

**Files:**

- Modify: `package.json`
- Modify: `vite.config.ts`

- [ ] **Step 1: Install vue-router and happy-dom**

```bash
npm install vue-router
npm install -D happy-dom
```

- [ ] **Step 2: Add test block to vite.config.ts**

Current `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' },
  },
})
```

Replace with:

```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
```

- [ ] **Step 3: Verify vitest runs (no tests yet, just check config)**

```bash
npx vitest run
```

Expected: `No test files found, exiting with code 1` — confirms the runner
works.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json vite.config.ts
git commit -m "chore: add vue-router and configure vitest with happy-dom"
```

---

### Task 2: Create router + refactor App.vue → HomeView.vue

**Files:**

- Create: `src/router/index.ts`
- Create: `src/views/HomeView.vue`
- Modify: `src/App.vue`
- Modify: `src/main.ts`

- [ ] **Step 1: Write failing test for router**

Create `tests/router/router.spec.ts`:

```ts
import router from '@/router/index'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

describe('router', () => {
  it('has a route for /', () => {
    const routes = router.getRoutes()
    const home = routes.find(r => r.path === '/')
    expect(home).toBeDefined()
  })

  it('has a route for /pacotes/:slug', () => {
    const routes = router.getRoutes()
    const pkg = routes.find(r => r.path === '/pacotes/:slug')
    expect(pkg).toBeDefined()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run tests/router/router.spec.ts
```

Expected: FAIL — `Cannot find module '@/router/index'`

- [ ] **Step 3: Create src/router/index.ts**

```ts
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/pacotes/:slug',
      component: () => import('@/views/PackageView.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
```

- [ ] **Step 4: Create src/views/HomeView.vue**

```vue
<script setup lang="ts">
import SectionAbout from '@/components/sections/SectionAbout.vue'
import SectionCTA from '@/components/sections/SectionCTA.vue'
import SectionFAQ from '@/components/sections/SectionFAQ.vue'
import SectionFooter from '@/components/sections/SectionFooter.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import SectionProcess from '@/components/sections/SectionProcess.vue'
import SectionServices from '@/components/sections/SectionServices.vue'
import SectionTestimonials from '@/components/sections/SectionTestimonials.vue'
</script>

<template>
  <main>
    <SectionNavbar />
    <SectionHero />
    <SectionServices />
    <SectionProcess />
    <SectionAbout />
    <SectionTestimonials />
    <SectionFAQ />
    <SectionCTA />
  </main>
  <SectionFooter />
</template>
```

- [ ] **Step 5: Replace src/App.vue content**

```vue
<template>
  <RouterView />
</template>
```

- [ ] **Step 6: Update src/main.ts to install router**

```ts
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import './assets/main.css'
import en from './locales/en.json'
import pt from './locales/pt-br.json'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: { pt, en },
})

createApp(App).use(i18n).use(MotionPlugin).use(router).mount('#app')
```

- [ ] **Step 7: Run router test to verify it passes**

```bash
npx vitest run tests/router/router.spec.ts
```

Expected: PASS — 2 tests pass

- [ ] **Step 8: Verify dev server still loads home page**

```bash
npm run dev
```

Open `http://localhost:5173` — home page should render exactly as before.

- [ ] **Step 9: Commit**

```bash
git add src/router/index.ts src/views/HomeView.vue src/App.vue src/main.ts tests/router/router.spec.ts
git commit -m "feat: add vue-router, extract HomeView from App.vue"
```

---

### Task 3: Add i18n keys for package pages

**Files:**

- Modify: `src/locales/pt-br.json`
- Modify: `src/locales/en.json`

- [ ] **Step 1: Add `package` key to src/locales/pt-br.json**

Append the following object as a top-level key in `src/locales/pt-br.json`
(before the closing `}`):

```json
  "package": {
    "back": "← Voltar para planos",
    "price_from": "a partir de",
    "includes_title": "O QUE ESTÁ INCLUSO",
    "process_title": "COMO FUNCIONA",
    "faq_title": "DÚVIDAS FREQUENTES",
    "cta_title": "Pronto para começar?",
    "cta_subtitle": "Entre em contato e receba um diagnóstico gratuito do seu projeto.",
    "cta_button": "Falar com a equipe →",
    "portfolio": {
      "tag": "PORTFÓLIO",
      "name": "Site Portfólio",
      "price": "R$ 700",
      "subtitle": "Uma presença digital limpa, rápida e profissional. Ideal para prestadores de serviço que querem ser encontrados e gerar credibilidade online.",
      "features": [
        "Design personalizado (sem templates)",
        "Até 5 seções",
        "SEO básico (meta tags + sitemap)",
        "Formulário de contato integrado",
        "Responsivo: mobile, tablet e desktop",
        "Deploy + configuração de domínio",
        "Entrega em até 15 dias úteis"
      ],
      "timeline": [
        { "step": "01", "title": "Briefing", "description": "Você compartilha conteúdo e referências. Alinhamos a estrutura e os objetivos do site." },
        { "step": "02", "title": "Design", "description": "Criamos o layout personalizado baseado na sua marca, com foco em clareza e conversão." },
        { "step": "03", "title": "Desenvolvimento", "description": "Implementamos o design em código, com SEO técnico, formulário de contato e otimização de performance." },
        { "step": "04", "title": "Revisão", "description": "Você revisa e aprovamos juntos. Até 2 rodadas de ajustes inclusas." },
        { "step": "05", "title": "Lançamento", "description": "Deploy no seu domínio com certificado SSL. Seu site vai ao ar." }
      ],
      "faq": [
        { "question": "Quais seções estão incluídas?", "answer": "O pacote inclui até 5 seções (ex: Hero, Sobre, Serviços, Depoimentos e Contato). Seções adicionais podem ser orçadas separadamente." },
        { "question": "Preciso ter domínio e hospedagem?", "answer": "Não. Cuidamos de toda a configuração. Se você já tiver um domínio, basta transferir o acesso. Se não, orientamos na compra." },
        { "question": "Consigo atualizar o site sozinho depois?", "answer": "Sim. Entregamos o código-fonte e podemos configurar um painel simples de edição se necessário." },
        { "question": "Qual o prazo de entrega?", "answer": "Em média 10 a 15 dias úteis após aprovação do briefing." }
      ]
    },
    "landing": {
      "tag": "LANDING PAGE PRO",
      "name": "Landing Page Pro",
      "price": "R$ 1.200",
      "subtitle": "Solução digital completa focada em conversão: SEO avançado, formulário de contato, configuração de domínio e alta performance garantida.",
      "features": [
        "Design personalizado de alta conversão",
        "Seções ilimitadas",
        "SEO avançado (Core Web Vitals otimizado)",
        "Formulário de contato + integração WhatsApp",
        "Google Analytics + Search Console configurados",
        "Deploy + configuração de domínio + SSL",
        "Entrega em até 15 dias úteis"
      ],
      "timeline": [
        { "step": "01", "title": "Briefing estratégico", "description": "Mapeamos seu público, concorrentes e objetivos de conversão antes de começar." },
        { "step": "02", "title": "Copywriting + Design", "description": "Criamos textos persuasivos e layout otimizado para maximizar conversão." },
        { "step": "03", "title": "Desenvolvimento", "description": "Código limpo e performático com SEO avançado, integrações e métricas configuradas." },
        { "step": "04", "title": "Revisão", "description": "Você revisa e aprovamos juntos. Até 2 rodadas de ajustes inclusas." },
        { "step": "05", "title": "Lançamento + Analytics", "description": "Deploy com SSL, Google Analytics e Search Console para acompanhar seus resultados." }
      ],
      "faq": [
        { "question": "Qual a diferença para o Portfólio?", "answer": "A Landing Page Pro é focada em conversão com SEO avançado, seções ilimitadas, copywriting estratégico e integração com ferramentas de métricas." },
        { "question": "Posso usar meu domínio atual?", "answer": "Sim, basta nos passar o acesso ao painel do seu domínio e cuidamos de tudo." },
        { "question": "Inclui gestão de tráfego pago?", "answer": "Não. O pacote foca em conversão orgânica. Gestão de tráfego pago é um serviço separado." },
        { "question": "Qual o prazo de entrega?", "answer": "Em média 10 a 15 dias úteis após aprovação do briefing." }
      ]
    }
  }
```

- [ ] **Step 2: Add `package` key to src/locales/en.json**

Append the following object as a top-level key in `src/locales/en.json` (before
the closing `}`):

```json
  "package": {
    "back": "← Back to plans",
    "price_from": "starting from",
    "includes_title": "WHAT'S INCLUDED",
    "process_title": "HOW IT WORKS",
    "faq_title": "FREQUENTLY ASKED QUESTIONS",
    "cta_title": "Ready to get started?",
    "cta_subtitle": "Get in touch and receive a free audit of your project.",
    "cta_button": "Talk to the team →",
    "portfolio": {
      "tag": "PORTFOLIO",
      "name": "Portfolio Website",
      "price": "R$ 700",
      "subtitle": "A clean, fast, and professional digital presence. Ideal for service providers who want to be found online and build credibility.",
      "features": [
        "Custom design (no templates)",
        "Up to 5 sections",
        "Basic SEO (meta tags + sitemap)",
        "Integrated contact form",
        "Responsive: mobile, tablet, and desktop",
        "Deploy + domain setup",
        "Delivery in up to 15 business days"
      ],
      "timeline": [
        { "step": "01", "title": "Briefing", "description": "You share content and references. We align the structure and goals of the site." },
        { "step": "02", "title": "Design", "description": "We create a custom layout based on your brand, focused on clarity and conversion." },
        { "step": "03", "title": "Development", "description": "We implement the design in code, with technical SEO, contact form, and performance optimization." },
        { "step": "04", "title": "Review", "description": "You review and we approve together. Up to 2 rounds of adjustments included." },
        { "step": "05", "title": "Launch", "description": "Deploy to your domain with SSL certificate. Your site goes live." }
      ],
      "faq": [
        { "question": "Which sections are included?", "answer": "The package includes up to 5 sections (e.g. Hero, About, Services, Testimonials, and Contact). Additional sections can be quoted separately." },
        { "question": "Do I need domain and hosting?", "answer": "No. We handle all the configuration. If you already have a domain, just transfer access. If not, we'll guide you through the purchase." },
        { "question": "Can I update the site myself afterwards?", "answer": "Yes. We deliver the source code and can set up a simple editing panel if needed." },
        { "question": "What is the delivery timeframe?", "answer": "On average 10 to 15 business days after briefing approval." }
      ]
    },
    "landing": {
      "tag": "LANDING PAGE PRO",
      "name": "Landing Page Pro",
      "price": "R$ 1,200",
      "subtitle": "A complete digital solution focused on conversion: advanced SEO, contact form, domain setup, and guaranteed high performance.",
      "features": [
        "High-conversion custom design",
        "Unlimited sections",
        "Advanced SEO (Core Web Vitals optimized)",
        "Contact form + WhatsApp integration",
        "Google Analytics + Search Console configured",
        "Deploy + domain setup + SSL",
        "Delivery in up to 15 business days"
      ],
      "timeline": [
        { "step": "01", "title": "Strategic briefing", "description": "We map your audience, competitors, and conversion goals before starting." },
        { "step": "02", "title": "Copywriting + Design", "description": "We create persuasive copy and a layout optimized to maximize conversion." },
        { "step": "03", "title": "Development", "description": "Clean, performant code with advanced SEO, integrations, and configured metrics." },
        { "step": "04", "title": "Review", "description": "You review and we approve together. Up to 2 rounds of adjustments included." },
        { "step": "05", "title": "Launch + Analytics", "description": "Deploy with SSL, Google Analytics, and Search Console to track your results." }
      ],
      "faq": [
        { "question": "What's the difference from Portfolio?", "answer": "Landing Page Pro is focused on conversion with advanced SEO, unlimited sections, strategic copywriting, and metrics tool integration." },
        { "question": "Can I use my current domain?", "answer": "Yes, just give us access to your domain panel and we'll handle everything." },
        { "question": "Does it include paid traffic management?", "answer": "No. The package focuses on organic conversion. Paid traffic management is a separate service." },
        { "question": "What is the delivery timeframe?", "answer": "On average 10 to 15 business days after briefing approval." }
      ]
    }
  }
```

- [ ] **Step 3: Commit**

```bash
git add src/locales/pt-br.json src/locales/en.json
git commit -m "feat: add i18n keys for package detail pages (portfolio + landing)"
```

---

### Task 4: Create PackageView.vue

**Files:**

- Create: `src/views/PackageView.vue`

- [ ] **Step 1: Write failing test**

Create `tests/views/PackageView.spec.ts`:

```ts
import en from '@/locales/en.json'
import pt from '@/locales/pt-br.json'
import PackageView from '@/views/PackageView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createMemoryHistory, createRouter } from 'vue-router'

function makeI18n() {
  return createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: { pt, en },
  })
}

function makeRouter(slug: string) {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/pacotes/:slug', component: PackageView },
      { path: '/', component: { template: '<div />' } },
    ],
  })
}

async function mountForSlug(slug: string) {
  const router = makeRouter(slug)
  await router.push(`/pacotes/${slug}`)
  await router.isReady()
  return mount(PackageView, {
    global: {
      plugins: [makeI18n(), router],
      stubs: {
        SectionNavbar: true,
        SectionFooter: true,
      },
    },
  })
}

describe('PackageView', () => {
  it('renders portfolio package name', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Site Portfólio')
  })

  it('renders portfolio price', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('R$ 700')
  })

  it('renders landing package name', async () => {
    const wrapper = await mountForSlug('landing-page')
    expect(wrapper.text()).toContain('Landing Page Pro')
  })

  it('renders landing price', async () => {
    const wrapper = await mountForSlug('landing-page')
    expect(wrapper.text()).toContain('R$ 1.200')
  })

  it('renders features list for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Design personalizado (sem templates)')
  })

  it('renders timeline steps for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Briefing')
  })

  it('renders FAQ for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Quais seções estão incluídas?')
  })

  it('redirects to / for unknown slug', async () => {
    const router = makeRouter('unknown')
    const pushSpy = vi.spyOn(router, 'replace')
    await router.push('/pacotes/unknown')
    await router.isReady()
    mount(PackageView, {
      global: {
        plugins: [makeI18n(), router],
        stubs: { SectionNavbar: true, SectionFooter: true },
      },
    })
    await new Promise(r => setTimeout(r, 0))
    expect(pushSpy).toHaveBeenCalledWith('/')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run tests/views/PackageView.spec.ts
```

Expected: FAIL — `Cannot find module '@/views/PackageView.vue'`

- [ ] **Step 3: Create src/views/PackageView.vue**

```vue
<script setup lang="ts">
import SectionFooter from '@/components/sections/SectionFooter.vue'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import Accordion from '@/components/ui/Accordion.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Timeline from '@/components/ui/Timeline.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { t, tm } = useI18n()

const SLUG_TO_KEY: Record<string, string> = {
  portfolio: 'portfolio',
  'landing-page': 'landing',
}

const packageKey = computed(() => {
  const key = SLUG_TO_KEY[route.params.slug as string]
  if (!key) {
    router.replace('/')
    return null
  }
  return key
})

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

const faqItems = computed((): Array<{ question: string; answer: string }> => {
  if (!packageKey.value) return []
  return tm(`package.${packageKey.value}.faq`) as Array<{
    question: string
    answer: string
  }>
})
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
          <span class="package-hero__price-from">{{
            t('package.price_from')
          }}</span>
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
            <span class="package-feature-item__check" aria-hidden="true"
              >✓</span
            >
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

.package-back-link:hover {
  color: var(--color-primary);
}

.package-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 100px;
  background-color: rgba(70, 206, 122, 0.12);
  border: 1px solid rgba(70, 206, 122, 0.25);
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

.package-cta {
  padding-block: 5rem;
}

.package-cta__inner {
  text-align: center;
}

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
  .package-features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .package-features__grid {
    grid-template-columns: repeat(3, 1fr);
  }
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
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx vitest run tests/views/PackageView.spec.ts
```

Expected: PASS — 8 tests pass

- [ ] **Step 5: Verify in dev server**

Navigate to `http://localhost:5173/pacotes/portfolio` — package detail page for
Portfólio should render with green tag, price R$ 700, 7 feature cards, 5-step
timeline, 4 FAQ items.

Navigate to `http://localhost:5173/pacotes/landing-page` — package detail page
for Landing Page Pro should render with price R$ 1.200, 7 feature cards, 5-step
timeline, 4 FAQ items.

Navigate to `http://localhost:5173/pacotes/unknown` — should redirect to `/`.

- [ ] **Step 6: Commit**

```bash
git add src/views/PackageView.vue tests/views/PackageView.spec.ts
git commit -m "feat: create PackageView for /pacotes/:slug route"
```

---

### Task 5: Update SectionServices to link to package routes

**Files:**

- Modify: `src/components/sections/SectionServices.vue`

- [ ] **Step 1: Write failing test**

Create `tests/components/SectionServices.spec.ts`:

```ts
import SectionServices from '@/components/sections/SectionServices.vue'
import en from '@/locales/en.json'
import pt from '@/locales/pt-br.json'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createMemoryHistory, createRouter } from 'vue-router'

function setup() {
  const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: { pt, en },
  })
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/pacotes/:slug', component: { template: '<div />' } },
    ],
  })
  return { i18n, router }
}

describe('SectionServices', () => {
  it('portfolio card links to /pacotes/portfolio', async () => {
    const { i18n, router } = setup()
    await router.push('/')
    await router.isReady()
    const wrapper = mount(SectionServices, {
      global: { plugins: [i18n, router] },
    })
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    const portfolioLink = links.find(
      l => l.props('to') === '/pacotes/portfolio',
    )
    expect(portfolioLink).toBeDefined()
  })

  it('landing card links to /pacotes/landing-page', async () => {
    const { i18n, router } = setup()
    await router.push('/')
    await router.isReady()
    const wrapper = mount(SectionServices, {
      global: { plugins: [i18n, router] },
    })
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    const landingLink = links.find(
      l => l.props('to') === '/pacotes/landing-page',
    )
    expect(landingLink).toBeDefined()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run tests/components/SectionServices.spec.ts
```

Expected: FAIL — `portfolioLink` and `landingLink` are undefined (links
currently use `href="#"` not RouterLink)

- [ ] **Step 3: Replace `href="#"` links in SectionServices.vue**

In `src/components/sections/SectionServices.vue`, find the Portfólio card's
details link:

```html
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
```

Replace with:

```html
<!-- Link -->
<RouterLink
  to="/pacotes/portfolio"
  class="group inline-flex items-center gap-1 text-sm hover:underline service-details-link"
>
  {{ t('services.details_link') }}
</RouterLink>
```

Find the Landing Page Pro card's details link:

```html
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
```

Replace with:

```html
<!-- Link -->
<RouterLink
  to="/pacotes/landing-page"
  class="inline-flex items-center gap-1 text-sm hover:underline service-details-link"
>
  {{ t('services.details_link') }}
</RouterLink>
```

- [ ] **Step 4: Add CSS class for the link in SectionServices.vue
      `<style scoped>` block**

Add to the existing `<style scoped>` section:

```css
.service-details-link {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-primary);
  text-decoration: none;
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npx vitest run tests/components/SectionServices.spec.ts
```

Expected: PASS — 2 tests pass

- [ ] **Step 6: Verify in dev server**

Open `http://localhost:5173`. Click "Ver detalhes do pacote →" on the Portfólio
card — should navigate to `/pacotes/portfolio`. Click browser back. Click "Ver
detalhes do pacote →" on the Landing Page Pro card — should navigate to
`/pacotes/landing-page`.

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/SectionServices.vue tests/components/SectionServices.spec.ts
git commit -m "feat: link service cards to package detail routes"
```

---

### Task 6: Run full test suite + final verification

**Files:** none

- [ ] **Step 1: Run all tests**

```bash
npx vitest run
```

Expected: PASS — all test files pass (router: 2, PackageView: 8,
SectionServices: 2 = 12 total)

- [ ] **Step 2: Run TypeScript check**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors

- [ ] **Step 3: Verify all routes in dev server**

```bash
npm run dev
```

Checklist:

- `http://localhost:5173/` — home page renders without regression
- `http://localhost:5173/pacotes/portfolio` — Portfólio package page: tag,
  title, price, 7 features, 5 timeline steps, 4 FAQ items, CTA button
- `http://localhost:5173/pacotes/landing-page` — Landing Page Pro: tag, title,
  price R$1.200, 7 features, 5 timeline steps, 4 FAQ items
- `http://localhost:5173/pacotes/qualquer-coisa` — redirects to `/`
- Home page → click "Ver detalhes do pacote →" on Portfólio → navigates to
  `/pacotes/portfolio` ✓
- Home page → click "Ver detalhes do pacote →" on Landing Page Pro → navigates
  to `/pacotes/landing-page` ✓
- Package page → click "← Voltar para planos" → goes to `/#servicos` (scrolls to
  services section) ✓
- Package page → click "Falar com a equipe →" → goes to `/#contato` (scrolls to
  contact form) ✓

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: verify build and full test suite for package detail pages"
```
