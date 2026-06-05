# Plano de Desenvolvimento — Landing Page Duete Solutions

## Visão Geral

Landing page responsiva em **Nuxt 3 + Tailwind CSS** com suporte a tema claro/escuro, baseada no design Figma.

**Breakpoints:** Desktop (1440px) · Tablet (834px) · Mobile (375px)

---

## Fase 1 — Setup e Configuração de Tokens CSS

### 1.1 Variáveis CSS / Design Tokens

Configurar em `assets/css/tokens.css` (ou via `tailwind.config.ts`):

```css
:root {
  /* Colors — Light Mode */
  --color-primary: #4ADE80;        /* Verde accent (verificar valor exato no Figma) */
  --color-primary-hover: #22C55E;
  --color-bg: #FFFFFF;
  --color-bg-muted: #F9FAFB;
  --color-bg-dark: #0D1117;        /* Seções escuras */
  --color-text: #0F172A;
  --color-text-muted: #6B7280;
  --color-border: #E5E7EB;

  /* Typography */
  --font-sans: 'Inter', sans-serif; /* verificar no Figma */
  --font-display: 'Inter', sans-serif;

  /* Spacing scale — via Tailwind */
  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
}

[data-theme="dark"] {
  --color-bg: #0D1117;
  --color-bg-muted: #161B22;
  --color-text: #F0F6FC;
  --color-text-muted: #8B949E;
  --color-border: #30363D;
}
```

`tailwind.config.ts` — extender tema com os tokens:

```ts
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-bg)',
      // ...
    }
  }
}
```

### 1.2 Verificar Variáveis no Figma

- Abrir painel **Variables** no Figma (botão no painel direito)
- Extrair valores exatos de: cores, radius, spacing, tipografia
- Atualizar `tokens.css` com os valores reais

---

## Fase 2 — Tema Claro/Escuro

### 2.1 Configuração Nuxt

```ts
// nuxt.config.ts
modules: ['@nuxtjs/color-mode'],
colorMode: {
  classSuffix: '',
  dataValue: 'theme',  // usa data-theme="dark"
  preference: 'system'
}
```

### 2.2 Persistência

- Usar `useColorMode()` do `@nuxtjs/color-mode`
- Toggle component controla `colorMode.preference`

---

## Fase 3 — Componentes Base

### 3.1 Button

- Variantes: `primary` · `secondary` · `ghost`
- Tamanhos: `sm` · `md` · `lg`
- Estados: default · hover · focus · disabled · loading

`components/ui/Button.vue` — props: `variant`, `size`, `disabled`, `loading`

### 3.2 Toggle (Light/Dark)

- Switch visual para alternar tema
- Ícone sol/lua
- Usa `useColorMode()`

`components/ui/ThemeToggle.vue`

### 3.3 Link

- Variantes: `inline`, `nav`, `footer`
- Animação underline no hover

`components/ui/AppLink.vue` — props: `href`, `external`, `variant`

### 3.4 Timeline

- Lista vertical com linha conectora
- Cada item: número/ícone + título + descrição
- Responsivo: linha à esquerda em mobile

`components/ui/Timeline.vue` / `components/ui/TimelineItem.vue` — props: `items[]{ step, title, description }`

### 3.5 Card

- Variantes: `default` · `pricing` · `feature` · `testimonial`

`components/ui/Card.vue` — props: `variant`, `highlighted`

### 3.6 FAQ (Accordion)

- Expandir/recolher com animação
- Acessível (`aria-expanded`, `aria-controls`)
- Múltiplos ou único aberto por vez

`components/ui/Accordion.vue` / `components/ui/AccordionItem.vue` — props: `items[]{ question, answer }`, `multiple`

---

## Fase 4 — Seções da Página

### 4.1 SectionNavbar

- Logo à esquerda
- Links de navegação centrais
- CTA button + ThemeToggle à direita
- Sticky + blur no scroll
- Menu hamburger em mobile

`components/sections/SectionNavbar.vue`

### 4.2 SectionHero

- Headline: "Seu negócio merece uma presença digital de verdade" (accent no trecho)
- Subtítulo + CTA button
- Elemento visual/imagem à direita (ou blob decorativo)

`components/sections/SectionHero.vue`

### 4.3 SectionPricing

- Título: "Escolha seu plano"
- 3 pricing cards (free · básico · destaque/dark)
- Card highlighted com borda accent
- Lista de features com ícone check

`components/sections/SectionPricing.vue`

### 4.4 SectionTimeline

- Título: "Do zero ao ar em dias"
- Timeline com passos do processo
- Usa componente `<Timeline>`

`components/sections/SectionTimeline.vue`

### 4.5 SectionFeatures

- Título: "Soluções digitais que geram resultados"
- Cards com métricas/números em destaque (verde)
- Grid responsivo

`components/sections/SectionFeatures.vue`

### 4.6 SectionTestimonials

- Título: "O que os clientes dizem"
- Cards de depoimento: avatar + nome + texto
- Carrossel em mobile

`components/sections/SectionTestimonials.vue`

### 4.7 SectionFAQ

- Título: "Perguntas frequentes"
- Usa componente `<Accordion>`

`components/sections/SectionFAQ.vue`

### 4.8 SectionCTA (Contact)

- Título: "Vamos construir algo juntos"
- Fundo escuro
- Formulário de contato + botão verde
- Links de redes sociais/contato

`components/sections/SectionCTA.vue`

### 4.9 SectionFooter

- Logo + links + copyright
- Fundo escuro (continuação do CTA)

`components/sections/SectionFooter.vue`

---

## Fase 5 — Página Principal

Montar `pages/index.vue` compondo todas as seções:

```vue
<template>
  <SectionNavbar />
  <main>
    <SectionHero />
    <SectionPricing />
    <SectionTimeline />
    <SectionFeatures />
    <SectionTestimonials />
    <SectionFAQ />
    <SectionCTA />
  </main>
  <SectionFooter />
</template>
```

---

## Estrutura de Pastas

```
├── assets/
│   └── css/
│       ├── tokens.css
│       └── main.css
├── components/
│   ├── ui/
│   │   ├── Button.vue
│   │   ├── ThemeToggle.vue
│   │   ├── AppLink.vue
│   │   ├── Timeline.vue
│   │   ├── TimelineItem.vue
│   │   ├── Card.vue
│   │   ├── Accordion.vue
│   │   └── AccordionItem.vue
│   └── sections/
│       ├── SectionNavbar.vue
│       ├── SectionHero.vue
│       ├── SectionPricing.vue
│       ├── SectionTimeline.vue
│       ├── SectionFeatures.vue
│       ├── SectionTestimonials.vue
│       ├── SectionFAQ.vue
│       ├── SectionCTA.vue
│       └── SectionFooter.vue
├── pages/
│   └── index.vue
├── tailwind.config.ts
└── nuxt.config.ts
```

---

## Ordem de Execução

- [ ] **Setup:** `tailwind.config.ts` + `tokens.css` + `@nuxtjs/color-mode`
- [ ] **Componentes UI:** Button → ThemeToggle → Link → Card → Accordion → Timeline
- [ ] **Seções:** Navbar → Hero → Pricing → Timeline → Features → Testimonials → FAQ → CTA → Footer
- [ ] **Responsividade:** revisar cada seção nos 3 breakpoints
- [ ] **Tema escuro:** testar todas as seções com `data-theme="dark"`
- [ ] **Acessibilidade:** aria-labels, foco visível, contraste

---

## Dependências

```bash
npm install @nuxtjs/color-mode
# Tailwind já configurado
```

> **Nota:** Antes de codificar os tokens, abrir o painel **Variables** no Figma (botão no canto superior direito do painel Design) para extrair valores exatos de cores, tipografia e espaçamentos.
