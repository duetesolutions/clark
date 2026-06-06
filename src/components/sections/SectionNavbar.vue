<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/ui/Button.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import useLang from '@/composables/useLang'
import useTheme from '@/composables/useTheme'

const { t } = useI18n()
const { lang, setLang } = useLang()
const { isDark } = useTheme()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = computed(() => [
  { label: t('nav.services'), href: '#servicos' },
  { label: t('nav.process'), href: '#processo' },
  { label: t('nav.about'), href: '#sobre' },
  { label: t('nav.faq'), href: '#faq' },
])

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
    :class="isScrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.12)]' : ''"
    :style="{
      backgroundColor: isDark
        ? (isScrolled ? 'rgba(13,17,23,0.97)' : 'rgba(13,17,23,0.85)')
        : (isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)'),
      borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }"
    role="banner"
  >
    <nav
      class="mx-auto flex max-w-270 items-center justify-between px-6 py-4"
      aria-label="Navegação principal"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center gap-1.25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:rounded-sm"
        style="--tw-ring-color: var(--color-primary)"
        aria-label="Duete Solutions — página inicial"
      >
        <!-- Two green squares -->
        <span class="flex items-center gap-1.25" aria-hidden="true">
          <span
            class="block rounded-xs"
            style="width:4px; height:4px; background-color:#46CE7A; opacity:1;"
          />
          <span
            class="block rounded-xs"
            style="width:4px; height:4px; background-color:#46CE7A; opacity:0.4;"
          />
        </span>
        <!-- Brand text -->
        <span
          class="leading-none"
          style="font-family:var(--font-display); font-weight:700; font-size:15px; color:var(--color-text);"
        > Duete</span>
        <span
          class="leading-none"
          style="font-family:var(--font-display); font-weight:400; font-size:15px; color:#46CE7A;"
        > Solutions</span>
      </a>

      <!-- Desktop nav links -->
      <ul class="hidden items-center lg:flex" style="gap:32px;" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="transition-colors duration-200 focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2"
            style="
              font-family: var(--font-sans);
              font-weight: 600;
              font-size: 14px;
              color: var(--color-text-muted);
              text-decoration: none;
              --tw-ring-color: var(--color-primary);
            "
            @mouseover="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)')"
            @mouseleave="(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)')"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- ThemeToggle (always visible) -->
        <ThemeToggle />

        <!-- Language toggle (hidden on mobile) -->
        <div class="hidden items-center gap-1 lg:flex" role="group" aria-label="Seleção de idioma">
          <button
            type="button"
            class="rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            :style="
              lang === 'pt'
                ? {
                    backgroundColor: '#132227',
                    color: '#f0f6fc',
                    '--tw-ring-color': 'var(--color-primary)',
                  }
                : {
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-muted)',
                    '--tw-ring-color': 'var(--color-primary)',
                  }
            "
            @click="setLang('pt')"
          >
            PT
          </button>
          <button
            type="button"
            class="rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            :style="
              lang === 'en'
                ? {
                    backgroundColor: '#132227',
                    color: '#f0f6fc',
                    '--tw-ring-color': 'var(--color-primary)',
                  }
                : {
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-muted)',
                    '--tw-ring-color': 'var(--color-primary)',
                  }
            "
            @click="setLang('en')"
          >
            EN
          </button>
        </div>

        <!-- "Fale conosco" CTA (desktop) -->
        <div class="hidden lg:block">
          <Button
            variant="primary"
            size="sm"
            class="rounded-full!"
          >
            {{ t('nav.cta') }}
          </Button>
        </div>

        <!-- Hamburger (mobile only) -->
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
          <!-- Close (X) icon -->
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
          <!-- Hamburger (3-bar) icon -->
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

    <!-- Mobile dropdown -->
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
          backgroundColor: isDark ? 'rgba(13,17,23,0.99)' : 'rgba(255,255,255,0.99)',
        }"
        role="navigation"
        aria-label="Menu móvel"
      >
        <ul class="flex flex-col px-6 py-3" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="flex items-center py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
              :style="{
                fontFamily: 'var(--font-sans)',
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
        <div class="px-6 pb-5 pt-3">
          <Button variant="primary" size="md" class="w-full rounded-full!" @click="closeMobileMenu">
            {{ t('nav.cta') }}
          </Button>
        </div>
      </div>
    </Transition>
  </header>
</template>
