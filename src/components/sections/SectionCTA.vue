<script setup lang="ts">
import { reactive } from 'vue'
import Button from '@/components/ui/Button.vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function handleSubmit() {
  console.log('Form submitted:', { ...formData })
  alert('Mensagem enviada! Entraremos em contato em até 24 horas.')
}
</script>

<template>
  <section
    id="contato"
    class="py-20 sm:py-28"
    :style="{ backgroundColor: 'var(--color-dark)' }"
    aria-labelledby="cta-title"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-12 text-center">
        <h2
          id="cta-title"
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Vamos construir algo juntos
        </h2>
        <p class="mt-4 text-lg text-white/70">
          Conte-nos sobre seu projeto e receba uma proposta personalizada em até 24 horas
        </p>
      </div>

      <!-- Contact form -->
      <form
        class="rounded-2xl p-6 sm:p-8"
        :style="{
          backgroundColor: 'color-mix(in srgb, var(--color-dark2) 80%, transparent)',
          border: '1px solid rgba(255,255,255,0.08)',
        }"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Name -->
          <div class="flex flex-col gap-1.5">
            <label
              for="cta-name"
              class="text-sm font-medium text-white/80"
            >
              Nome <span class="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="cta-name"
              v-model="formData.name"
              type="text"
              placeholder="Seu nome completo"
              required
              autocomplete="name"
              class="w-full rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 outline-none placeholder:text-gray-400 focus:ring-2"
              :style="{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderColor: '#d1d5db',
                '--tw-ring-color': 'var(--color-primary)',
              }"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label
              for="cta-email"
              class="text-sm font-medium text-white/80"
            >
              E-mail <span class="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="cta-email"
              v-model="formData.email"
              type="email"
              placeholder="seu@email.com"
              required
              autocomplete="email"
              class="w-full rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 outline-none placeholder:text-gray-400 focus:ring-2"
              :style="{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderColor: '#d1d5db',
                '--tw-ring-color': 'var(--color-primary)',
              }"
            />
          </div>

          <!-- Phone (full width) -->
          <div class="flex flex-col gap-1.5 sm:col-span-2">
            <label
              for="cta-phone"
              class="text-sm font-medium text-white/80"
            >
              Telefone
              <span class="ml-1 text-xs text-white/40">(opcional)</span>
            </label>
            <input
              id="cta-phone"
              v-model="formData.phone"
              type="tel"
              placeholder="(11) 9 0000-0000"
              autocomplete="tel"
              class="w-full rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 outline-none placeholder:text-gray-400 focus:ring-2"
              :style="{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderColor: '#d1d5db',
                '--tw-ring-color': 'var(--color-primary)',
              }"
            />
          </div>

          <!-- Message (full width) -->
          <div class="flex flex-col gap-1.5 sm:col-span-2">
            <label
              for="cta-message"
              class="text-sm font-medium text-white/80"
            >
              Mensagem <span class="text-red-400" aria-hidden="true">*</span>
            </label>
            <textarea
              id="cta-message"
              v-model="formData.message"
              rows="5"
              placeholder="Conte um pouco sobre seu projeto, objetivos e prazo desejado..."
              required
              class="w-full resize-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 outline-none placeholder:text-gray-400 focus:ring-2"
              :style="{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderColor: '#d1d5db',
                '--tw-ring-color': 'var(--color-primary)',
              }"
            />
          </div>
        </div>

        <!-- Submit -->
        <div class="mt-6">
          <Button type="submit" variant="primary" size="lg" class="w-full sm:w-auto">
            Enviar mensagem
          </Button>
        </div>
      </form>

      <!-- Contact links -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <!-- WhatsApp -->
        <a
          href="https://wa.me/5511912345678"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
          aria-label="WhatsApp: (11) 9 1234-5678"
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
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
          <span>(11) 9 1234-5678</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:contato@duete.solutions"
          class="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
          aria-label="E-mail: contato@duete.solutions"
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
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>contato@duete.solutions</span>
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/duetesolutions"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
          aria-label="Instagram: @duetesolutions"
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
          <span>@duetesolutions</span>
        </a>
      </div>
    </div>
  </section>
</template>
