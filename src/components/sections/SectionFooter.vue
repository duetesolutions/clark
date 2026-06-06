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
        class="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-sm"
        style="--tw-ring-color: var(--color-primary);"
        aria-label="Duete Solutions — página inicial"
      >
        <!-- Two green squares -->
        <span class="flex items-center gap-1" aria-hidden="true">
          <span
            class="block rounded-xs"
            style="width: 8px; height: 8px; background-color: #46CE7A; opacity: 1;"
          />
          <span
            class="block rounded-xs"
            style="width: 8px; height: 8px; background-color: #46CE7A; opacity: 0.4;"
          />
        </span>
        <!-- Brand text -->
        <span
          class="leading-none"
          style="font-family: var(--font-display); font-weight: 700; font-size: 15px; color: white;"
        >
          Duete
        </span>
        <span
          class="leading-none"
          style="font-family: var(--font-display); font-weight: 400; font-size: 15px; color: #46CE7A;"
        >
          Solutions
        </span>
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
