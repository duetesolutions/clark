<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import useLang from '@/composables/useLang'
import FlagIcon from '@/components/ui/FlagIcon.vue'

const { lang, setLang } = useLang()

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

type LangCode = 'pt' | 'en'

const labels = computed<Record<LangCode, string>>(() =>
  lang.value === 'pt'
    ? { pt: 'Português', en: 'Inglês' }
    : { pt: 'Portuguese', en: 'English' },
)

const options = computed(() =>
  (['pt', 'en'] as LangCode[]).map((code) => ({
    code,
    label: labels.value[code],
  })),
)

function toggle() {
  isOpen.value = !isOpen.value
}

function select(code: LangCode) {
  setLang(code)
  isOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div ref="root" class="relative">
    <!-- Trigger button -->
    <button
      type="button"
      class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
      :style="{
        backgroundColor: 'transparent',
        color: 'var(--color-text-muted)',
        border: '1px solid var(--color-border)',
        '--tw-ring-color': 'var(--color-primary)',
      }"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      aria-label="Selecionar idioma"
      @click="toggle"
    >
      <FlagIcon :code="(lang as LangCode)" />
      <span>{{ labels[(lang as LangCode)] }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        class="transition-transform duration-200"
        :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition-all duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-if="isOpen"
        class="absolute right-0 z-50 mt-2 min-w-37.5 overflow-hidden rounded-lg py-1 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
        :style="{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
        }"
        role="listbox"
      >
        <li v-for="opt in options" :key="opt.code">
          <button
            type="button"
            class="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-none"
            :style="{
              color: opt.code === lang ? 'var(--color-primary)' : 'var(--color-text)',
              backgroundColor: 'transparent',
            }"
            :aria-selected="opt.code === lang"
            role="option"
            @click="select(opt.code)"
            @mouseover="(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-border)')"
            @mouseleave="(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent')"
          >
            <FlagIcon :code="opt.code" />
            {{ opt.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
