<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/ui/Button.vue'

const { t } = useI18n()

const formData = reactive({
  name: '',
  email: '',
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
    class="py-20"
    style="background-color: #20272F;"
    aria-labelledby="contact-heading"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-16 flex flex-col items-center text-center">
        <span
          class="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style="background-color: rgba(70,206,122,0.12); color: var(--color-primary); font-family: var(--font-sans);"
        >
          ● {{ t('contact.tag') }}
        </span>

        <h2
          id="contact-heading"
          class="text-[32px] font-black leading-tight tracking-[-0.03em] text-white sm:text-[48px]"
          style="font-family: var(--font-sans);"
        >
          {{ t('contact.title') }}
        </h2>

        <p
          class="mx-auto mt-4 max-w-140 text-[16px] font-normal leading-relaxed"
          style="font-family: var(--font-sans); color: rgba(255,255,255,0.5);"
        >
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Two-column layout -->
      <div class="mx-auto grid max-w-270 grid-cols-1 gap-20 lg:grid-cols-2">

        <!-- Left column — Contact info -->
        <div class="flex flex-col gap-8">

          <!-- Item 1: Email -->
          <div class="flex items-start gap-4">
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
                class="mt-0.5 text-[14px] font-normal text-white"
                style="font-family: var(--font-sans);"
              >
                {{ t('contact.value_email') }}
              </p>
            </div>
          </div>

          <!-- Item 2: WhatsApp -->
          <div class="flex items-start gap-4">
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
                class="mt-0.5 text-[14px] font-normal text-white"
                style="font-family: var(--font-sans);"
              >
                {{ t('contact.value_whatsapp') }}
              </p>
            </div>
          </div>

          <!-- Item 3: Location -->
          <div class="flex items-start gap-4">
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
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: var(--color-primary);"
              >
                {{ t('contact.label_location') }}
              </p>
              <p
                class="mt-0.5 text-[14px] font-normal text-white"
                style="font-family: var(--font-sans);"
              >
                {{ t('contact.value_location') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right column — Form card -->
        <div
          class="rounded-2xl p-8"
          style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);"
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
              class="text-[16px] font-semibold text-white"
              style="font-family: var(--font-sans);"
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
                  style="font-family: var(--font-display); color: rgba(255,255,255,0.5);"
                >
                  {{ t('contact.form_name') }}
                </label>
                <input
                  id="contact-name"
                  v-model="formData.name"
                  type="text"
                  :placeholder="t('contact.form_name_placeholder')"
                  autocomplete="name"
                  class="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                  :style="{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: errors.name ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'var(--font-sans)',
                  }"
                  @focus="(e) => { if (!errors.name) (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--color-primary)' }"
                  @blur="(e) => { if (!errors.name) (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)' }"
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
                  style="font-family: var(--font-display); color: rgba(255,255,255,0.5);"
                >
                  {{ t('contact.form_email') }}
                </label>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  type="email"
                  :placeholder="t('contact.form_email_placeholder')"
                  autocomplete="email"
                  class="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                  :style="{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: errors.email ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'var(--font-sans)',
                  }"
                  @focus="(e) => { if (!errors.email) (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--color-primary)' }"
                  @blur="(e) => { if (!errors.email) (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)' }"
                />
                <p v-if="errors.email" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <!-- Row 2: O que você precisa? -->
            <div class="mt-4 flex flex-col gap-2">
              <label
                for="contact-need"
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: rgba(255,255,255,0.5);"
              >
                {{ t('contact.form_need') }}
              </label>
              <select
                id="contact-need"
                v-model="formData.need"
                class="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                :style="{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: errors.need ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-sans)',
                  appearance: 'auto',
                }"
                @focus="(e) => { if (!errors.need) (e.currentTarget as HTMLSelectElement).style.borderColor = 'var(--color-primary)' }"
                @blur="(e) => { if (!errors.need) (e.currentTarget as HTMLSelectElement).style.borderColor = 'rgba(255,255,255,0.1)' }"
              >
                <option value="" style="background-color: #20272F; color: rgba(255,255,255,0.3);">
                  {{ t('contact.form_select') }}
                </option>
                <option value="portfolio" style="background-color: #20272F; color: white;">
                  {{ t('contact.option_portfolio') }}
                </option>
                <option value="landing-page-pro" style="background-color: #20272F; color: white;">
                  {{ t('contact.option_landing') }}
                </option>
                <option value="mvp-startup" style="background-color: #20272F; color: white;">
                  {{ t('contact.option_mvp') }}
                </option>
              </select>
              <p v-if="errors.need" class="text-[11px]" style="color: #fca5a5; font-family: var(--font-sans);">
                {{ errors.need }}
              </p>
            </div>

            <!-- Row 3: Mensagem -->
            <div class="mt-4 flex flex-col gap-2">
              <label
                for="contact-message"
                class="text-[11px] font-semibold uppercase tracking-widest"
                style="font-family: var(--font-display); color: rgba(255,255,255,0.5);"
              >
                {{ t('contact.form_message') }}
              </label>
              <textarea
                id="contact-message"
                v-model="formData.message"
                rows="4"
                :placeholder="t('contact.form_message_placeholder')"
                class="w-full resize-none rounded-lg px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                :style="{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: errors.message ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-sans)',
                }"
                @focus="(e) => { if (!errors.message) (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--color-primary)' }"
                @blur="(e) => { if (!errors.message) (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)' }"
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
  color: rgba(255, 255, 255, 0.3);
}
select option {
  background-color: #20272f;
  color: white;
}
</style>
