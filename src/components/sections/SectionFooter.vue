<script setup lang="ts">
const serviceLinks = [
  { label: 'Landing Pages', href: '#' },
  { label: 'Sites Institucionais', href: '#' },
  { label: 'E-commerce', href: '#' },
  { label: 'Sistemas Web', href: '#' },
]

const companyLinks = [
  { label: 'Sobre nós', href: '#' },
  { label: 'Nosso processo', href: '#' },
  { label: 'Portfólio', href: '#' },
  { label: 'Blog', href: '#' },
]

const contactItems = [
  { label: 'contato@duete.solutions', href: 'mailto:contato@duete.solutions' },
  { label: '(11) 9 1234-5678', href: 'https://wa.me/5511912345678' },
  { label: 'São Paulo, Brasil', href: null },
]
</script>

<template>
  <footer
    :style="{ backgroundColor: 'var(--color-dark2)' }"
    aria-label="Rodapé do site"
  >
    <!-- Top section -->
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand column -->
        <div class="sm:col-span-2 lg:col-span-1">
          <a
            href="/"
            class="inline-flex items-center gap-0.5 text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
            :style="{ '--tw-ring-color': 'var(--color-primary)' }"
            aria-label="Duete Solutions — página inicial"
          >
            <span :style="{ color: 'var(--color-primary)' }">Duete</span>
            <span class="text-white/60 font-normal">.solutions</span>
          </a>
          <p class="mt-3 text-sm leading-relaxed text-white/50 max-w-xs">
            Presença digital que gera resultado
          </p>
        </div>

        <!-- Services column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/40">
            Serviços
          </h3>
          <ul class="mt-4 space-y-3" role="list">
            <li v-for="link in serviceLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:underline"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/40">
            Empresa
          </h3>
          <ul class="mt-4 space-y-3" role="list">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:underline"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/40">
            Contato
          </h3>
          <ul class="mt-4 space-y-3" role="list">
            <li v-for="item in contactItems" :key="item.label">
              <a
                v-if="item.href"
                :href="item.href"
                class="text-sm text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:underline"
                :target="item.href.startsWith('http') ? '_blank' : undefined"
                :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              >
                {{ item.label }}
              </a>
              <span
                v-else
                class="text-sm text-white/60"
              >
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      <div
        class="h-px w-full"
        :style="{ backgroundColor: 'rgba(255,255,255,0.08)' }"
      />
    </div>

    <!-- Bottom bar -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <!-- Copyright -->
        <p class="text-sm text-white/40">
          &copy; 2025 Duete Solutions. Todos os direitos reservados.
        </p>

        <!-- Social icons -->
        <div class="flex items-center gap-4" role="list" aria-label="Redes sociais">
          <!-- GitHub -->
          <a
            href="https://github.com/duetesolutions"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/40 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
            :style="{ '--tw-ring-color': 'var(--color-primary)' }"
            aria-label="GitHub da Duete Solutions"
            role="listitem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/duetesolutions"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/40 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
            :style="{ '--tw-ring-color': 'var(--color-primary)' }"
            aria-label="Instagram da Duete Solutions"
            role="listitem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/company/duetesolutions"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/40 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
            :style="{ '--tw-ring-color': 'var(--color-primary)' }"
            aria-label="LinkedIn da Duete Solutions"
            role="listitem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
