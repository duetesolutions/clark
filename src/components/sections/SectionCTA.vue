<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/ui/Button.vue'
import { useReveal } from '@/composables/useReveal'
import useTheme from '@/composables/useTheme'

const { t, locale } = useI18n()
const { reveal } = useReveal()
const { isDark } = useTheme()

// Theme-aware palette. Brand green is identical in both modes.
const c = computed(() =>
  isDark.value
    ? {
        bg: '#20272F',
        text: '#ffffff',
        textMuted: 'rgba(255,255,255,0.5)',
        cardBg: 'rgba(255,255,255,0.05)',
        cardBorder: 'rgba(255,255,255,0.08)',
        inputBg: 'rgba(255,255,255,0.08)',
        inputBorder: 'rgba(255,255,255,0.1)',
        formLabel: 'rgba(255,255,255,0.5)',
        placeholder: 'rgba(255,255,255,0.3)',
        optionBg: '#20272f',
        optionMuted: 'rgba(255,255,255,0.3)',
      }
    : {
        bg: '#f4f9f6',
        text: '#0f172a',
        textMuted: 'rgba(15,23,42,0.6)',
        cardBg: '#ffffff',
        cardBorder: 'rgba(15,23,42,0.08)',
        inputBg: '#ffffff',
        inputBorder: 'rgba(15,23,42,0.12)',
        formLabel: 'rgba(15,23,42,0.55)',
        placeholder: 'rgba(15,23,42,0.4)',
        optionBg: '#ffffff',
        optionMuted: 'rgba(15,23,42,0.4)',
      },
)

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  need: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  need: '',
  message: '',
})

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(): boolean {
  errors.name = formData.name.trim() ? '' : t('contact.error_required')
  errors.need = formData.need ? '' : t('contact.error_required')
  errors.message = formData.message.trim() ? '' : t('contact.error_required')

  if (!formData.email.trim()) {
    errors.email = t('contact.error_required')
  } else if (!emailRegex.test(formData.email)) {
    errors.email = t('contact.error_email_invalid')
  } else {
    errors.email = ''
  }

  return !errors.name && !errors.email && !errors.need && !errors.message
}

function maskPhone(e: Event) {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '')

  if (locale.value === 'en') {
    // US: +1 (000) 000-0000
    const d = raw.replace(/^1/, '').slice(0, 10)
    let out = d
    if (d.length > 0) out = `+1 (${d.slice(0, 3)}`
    if (d.length >= 4) out = `+1 (${d.slice(0, 3)}) ${d.slice(3, 6)}`
    if (d.length >= 7) out = `+1 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
    formData.phone = out
    return
  }

  // BR: (00) 00000-0000
  const digits = raw.slice(0, 11)
  let out = digits
  if (digits.length > 2) out = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length > 7) {
    const split = digits.length > 10 ? 7 : 6
    out = `(${digits.slice(0, 2)}) ${digits.slice(2, split)}-${digits.slice(split)}`
  }
  formData.phone = out
}

const isSubmitting = computed(() => status.value === 'submitting')

async function handleSubmit() {
  if (!validate()) return

  status.value = 'submitting'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData }),
    })

    if (!res.ok) throw new Error('Failed')

    status.value = 'success'
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.need = ''
    formData.message = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section
    id="contato"
    class="py-20 transition-colors duration-200"
    :style="{
      backgroundColor: c.bg,
      '--cta-placeholder': c.placeholder,
      '--cta-option-bg': c.optionBg,
      '--cta-option-text': c.text,
    }"
    aria-labelledby="contact-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div v-motion="reveal(0)" class="mb-16 flex flex-col items-center text-center">
        <span
          class="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style="background-color: rgba(70,206,122,0.12); color: var(--color-primary); font-family: var(--font-sans);"
        >
          ● {{ t('contact.tag') }}
        </span>

        <h2
          id="contact-heading"
          class="text-[32px] font-black leading-tight tracking-[-0.03em] sm:text-[48px]"
          :style="{ fontFamily: 'var(--font-sans)', color: c.text }"
        >
          {{ t('contact.title') }}
        </h2>

        <p
          class="mx-auto mt-4 max-w-140 text-[16px] font-normal leading-relaxed"
          :style="{ fontFamily: 'var(--font-sans)', color: c.textMuted }"
        >
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Two-column layout -->
      <div class="mx-auto grid max-w-270 grid-cols-1 gap-20 lg:grid-cols-2">

        <!-- Left column — Contact info -->
        <div v-motion="reveal(1)" class="flex flex-col gap-8">

          <!-- Item 1: Email -->
          <a href="mailto:gabrielmonteiroduete@gmail.com" class="group flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style="background-color: rgba(70,206,122,0.15);"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="color: var(--color-primary);"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: var(--color-primary);"
              >
                {{ t('contact.label_email') }}
              </p>
              <p
                class="mt-0.5 text-[14px] font-normal transition-colors group-hover:text-primary"
                :style="{ fontFamily: 'var(--font-sans)', color: c.text }"
              >
                {{ t('contact.value_email') }}
              </p>
            </div>
          </a>

          <!-- Item 2: WhatsApp -->
          <a
            href="https://wa.me/5588996865471"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-start gap-4"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style="background-color: rgba(70,206,122,0.15);"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style="color: var(--color-primary);"
                aria-hidden="true"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </div>
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: var(--color-primary);"
              >
                {{ t('contact.label_whatsapp') }}
              </p>
              <p
                class="mt-0.5 text-[14px] font-normal transition-colors group-hover:text-primary"
                :style="{ fontFamily: 'var(--font-sans)', color: c.text }"
              >
                {{ t('contact.value_whatsapp') }}
              </p>
            </div>
          </a>

          <!-- Item 3: Instagram -->
          <a
            href="https://instagram.com/duetesolutions"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-start gap-4"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style="background-color: rgba(70,206,122,0.15);"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="color: var(--color-primary);"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: var(--color-primary);"
              >
                {{ t('contact.label_instagram') }}
              </p>
              <p
                class="mt-0.5 text-[14px] font-normal transition-colors group-hover:text-primary"
                :style="{ fontFamily: 'var(--font-sans)', color: c.text }"
              >
                {{ t('contact.value_instagram') }}
              </p>
            </div>
          </a>
        </div>

        <!-- Right column — Form card -->
        <div
          v-motion="reveal(2)"
          class="rounded-2xl p-8"
          :style="{ backgroundColor: c.cardBg, border: `1px solid ${c.cardBorder}` }"
        >
          <!-- Success state -->
          <div
            v-if="status === 'success'"
            class="flex h-full min-h-64 flex-col items-center justify-center gap-4 text-center"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full"
              style="background-color: rgba(70,206,122,0.15);"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="color: var(--color-primary);"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p
              class="text-[16px] font-semibold"
              :style="{ fontFamily: 'var(--font-sans)', color: c.text }"
            >
              {{ t('contact.submit_success') }}
            </p>
          </div>

          <!-- Form -->
          <form v-else novalidate @submit.prevent="handleSubmit">
            <!-- Error banner -->
            <div
              v-if="status === 'error'"
              class="mb-4 rounded-lg px-4 py-3 text-sm"
              style="background-color: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5; font-family: var(--font-sans);"
            >
              {{ t('contact.submit_error') }}
            </div>

            <!-- Row 1: Nome + Email -->
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <!-- Nome -->
              <div class="flex flex-col gap-2">
                <label
                  for="contact-name"
                  class="text-[11px] font-semibold uppercase tracking-widest"
                  :style="{ fontFamily: 'var(--font-display)', color: c.formLabel }"
                >
                  {{ t('contact.form_name') }} <span style="color: var(--color-primary);">*</span>
                </label>
                <input
                  id="contact-name"
                  v-model="formData.name"
                  type="text"
                  :placeholder="t('contact.form_name_placeholder')"
                  autocomplete="name"
                  class="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                  :style="{
                    backgroundColor: c.inputBg,
                    border: errors.name ? '1px solid rgba(239,68,68,0.6)' : `1px solid ${c.inputBorder}`,
                    color: c.text,
                    fontFamily: 'var(--font-sans)',
                  }"
                  @focus="(e) => { if (!errors.name) (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--color-primary)' }"
                  @blur="(e) => { if (!errors.name) (e.currentTarget as HTMLInputElement).style.borderColor = c.inputBorder }"
                />
                <p v-if="errors.name" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2">
                <label
                  for="contact-email"
                  class="text-[11px] font-semibold uppercase tracking-widest"
                  :style="{ fontFamily: 'var(--font-display)', color: c.formLabel }"
                >
                  {{ t('contact.form_email') }} <span style="color: var(--color-primary);">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  type="email"
                  :placeholder="t('contact.form_email_placeholder')"
                  autocomplete="email"
                  class="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                  :style="{
                    backgroundColor: c.inputBg,
                    border: errors.email ? '1px solid rgba(239,68,68,0.6)' : `1px solid ${c.inputBorder}`,
                    color: c.text,
                    fontFamily: 'var(--font-sans)',
                  }"
                  @focus="(e) => { if (!errors.email) (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--color-primary)' }"
                  @blur="(e) => { if (!errors.email) (e.currentTarget as HTMLInputElement).style.borderColor = c.inputBorder }"
                />
                <p v-if="errors.email" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <!-- Row 2: Telefone -->
            <div class="mt-4 flex flex-col gap-2">
              <label
                for="contact-phone"
                class="text-[11px] font-semibold uppercase tracking-widest"
                :style="{ fontFamily: 'var(--font-display)', color: c.formLabel }"
              >
                {{ t('contact.form_phone') }}
              </label>
              <input
                id="contact-phone"
                :value="formData.phone"
                type="tel"
                inputmode="tel"
                maxlength="17"
                :placeholder="t('contact.form_phone_placeholder')"
                autocomplete="tel"
                @input="maskPhone"
                class="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                :style="{
                  backgroundColor: c.inputBg,
                  border: `1px solid ${c.inputBorder}`,
                  color: c.text,
                  fontFamily: 'var(--font-sans)',
                }"
                @focus="(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--color-primary)' }"
                @blur="(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = c.inputBorder }"
              />
            </div>

            <!-- Row 3: O que você precisa? -->
            <div class="mt-4 flex flex-col gap-2">
              <label
                for="contact-need"
                class="text-[11px] font-semibold uppercase tracking-widest"
                :style="{ fontFamily: 'var(--font-display)', color: c.formLabel }"
              >
                {{ t('contact.form_need') }} <span style="color: var(--color-primary);">*</span>
              </label>
              <select
                id="contact-need"
                v-model="formData.need"
                class="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                :style="{
                  backgroundColor: c.inputBg,
                  border: errors.need ? '1px solid rgba(239,68,68,0.6)' : `1px solid ${c.inputBorder}`,
                  color: c.text,
                  fontFamily: 'var(--font-sans)',
                  appearance: 'auto',
                }"
                @focus="(e) => { if (!errors.need) (e.currentTarget as HTMLSelectElement).style.borderColor = 'var(--color-primary)' }"
                @blur="(e) => { if (!errors.need) (e.currentTarget as HTMLSelectElement).style.borderColor = c.inputBorder }"
              >
                <option value="" :style="{ backgroundColor: c.optionBg, color: c.optionMuted }">
                  {{ t('contact.form_select') }}
                </option>
                <option value="portfolio" :style="{ backgroundColor: c.optionBg, color: c.text }">
                  {{ t('contact.option_portfolio') }}
                </option>
                <option value="landing-page-pro" :style="{ backgroundColor: c.optionBg, color: c.text }">
                  {{ t('contact.option_landing') }}
                </option>
                <option value="mvp-startup" :style="{ backgroundColor: c.optionBg, color: c.text }">
                  {{ t('contact.option_mvp') }}
                </option>
              </select>
              <p v-if="errors.need" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                {{ errors.need }}
              </p>
            </div>

            <!-- Row 4: Mensagem -->
            <div class="mt-4 flex flex-col gap-2">
              <label
                for="contact-message"
                class="text-[11px] font-semibold uppercase tracking-widest"
                :style="{ fontFamily: 'var(--font-display)', color: c.formLabel }"
              >
                {{ t('contact.form_message') }} <span style="color: var(--color-primary);">*</span>
              </label>
              <textarea
                id="contact-message"
                v-model="formData.message"
                rows="4"
                :placeholder="t('contact.form_message_placeholder')"
                class="w-full resize-none rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                :style="{
                  backgroundColor: c.inputBg,
                  border: errors.message ? '1px solid rgba(239,68,68,0.6)' : `1px solid ${c.inputBorder}`,
                  color: c.text,
                  fontFamily: 'var(--font-sans)',
                }"
                @focus="(e) => { if (!errors.message) (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--color-primary)' }"
                @blur="(e) => { if (!errors.message) (e.currentTarget as HTMLTextAreaElement).style.borderColor = c.inputBorder }"
              />
              <p v-if="errors.message" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                {{ errors.message }}
              </p>
            </div>

            <!-- Submit -->
            <div class="mt-6">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                class="w-full"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? t('contact.form_submitting') : t('contact.form_submit') }}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input::placeholder,
textarea::placeholder {
  color: var(--cta-placeholder);
}
select option {
  background-color: var(--cta-option-bg);
  color: var(--cta-option-text);
}
</style>
