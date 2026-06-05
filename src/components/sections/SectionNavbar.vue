<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '@/components/ui/Button.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import AppLink from '@/components/ui/AppLink.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Planos', href: '#planos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'FAQ', href: '#faq' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :style="{
      backgroundColor: isScrolled
        ? 'color-mix(in srgb, var(--color-bg) 85%, transparent)'
        : 'color-mix(in srgb, var(--color-bg) 70%, transparent)',
      borderBottom: '1px solid var(--color-border)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: isScrolled
        ? '0 4px 24px color-mix(in srgb, var(--color-text) 8%, transparent)'
        : 'none',
    }"
    role="banner"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      aria-label="Navegação principal"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center gap-0.5 text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
        :style="{ '--tw-ring-color': 'var(--color-primary)' }"
        aria-label="Duete Solutions — página inicial"
      >
        <span :style="{ color: 'var(--color-primary)' }">Duete</span>
        <span :style="{ color: 'var(--color-text-muted)', fontWeight: '400' }">.solutions</span>
      </a>

      <!-- Desktop nav links (hidden on mobile) -->
      <ul class="hidden items-center gap-6 lg:flex" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <AppLink :href="link.href" variant="nav">
            {{ link.label }}
          </AppLink>
        </li>
      </ul>

      <!-- Right side: CTA + ThemeToggle (desktop) + hamburger (mobile) -->
      <div class="flex items-center gap-2">
        <!-- Desktop CTA -->
        <div class="hidden lg:flex lg:items-center lg:gap-2">
          <Button variant="primary" size="sm">
            Começar agora
          </Button>
        </div>

        <!-- Theme toggle (always visible) -->
        <ThemeToggle />

        <!-- Hamburger button (mobile only) -->
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden"
          :style="{
            color: 'var(--color-text-muted)',
            '--tw-ring-color': 'var(--color-primary)',
          }"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="toggleMobileMenu"
        >
          <!-- Close icon (X) when open -->
          <svg
            v-if="isMobileMenuOpen"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <!-- Hamburger icon (3 bars) when closed -->
          <svg
            v-else
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
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile dropdown menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden"
        :style="{
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'color-mix(in srgb, var(--color-bg) 95%, transparent)',
        }"
        role="navigation"
        aria-label="Menu móvel"
      >
        <ul class="flex flex-col px-4 py-3" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="flex items-center py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
              :style="{
                color: 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-border)',
                '--tw-ring-color': 'var(--color-primary)',
              }"
              @click="closeMobileMenu"
              @mouseover="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)')"
              @mouseleave="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)')"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="px-4 pb-4 pt-2">
          <Button variant="primary" size="md" class="w-full" @click="closeMobileMenu">
            Começar agora
          </Button>
        </div>
      </div>
    </Transition>
  </header>
</template>
