<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer
    class="w-full"
    style="background-color: #132227; border-top: 1px solid rgba(255,255,255,0.06);"
    aria-label="Rodapé do site"
  >
    <div
      class="mx-auto flex min-h-20 max-w-270 flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8"
    >
      <!-- Left: Logo -->
      <a
        href="/"
        class="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
        style="--tw-ring-color: var(--color-primary);"
        aria-label="Duete Solutions — página inicial"
      >
        <img
          src="/logo/en/en_dark_h.png"
          alt="Duete Solutions"
          style="height: 28px; width: auto; display: block;"
        />
      </a>

      <!-- Right: Copyright -->
      <p
        class="text-center text-[12px] font-normal"
        style="font-family: var(--font-sans); color: rgba(255,255,255,0.28);"
      >
        {{ t('footer.copy') }}
      </p>
    </div>
  </footer>
</template>
