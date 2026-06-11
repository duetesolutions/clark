import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import SectionServices from '@/components/sections/SectionServices.vue'
import pt from '@/locales/pt-br.json'
import en from '@/locales/en.json'

function setup() {
  const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: { pt, en },
  })
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/pacote-de-entrada', component: { template: '<div />' } },
    ],
  })
  return { i18n, router }
}

describe('SectionServices', () => {
  it('both site/app cards link to /pacote-de-entrada', async () => {
    const { i18n, router } = setup()
    await router.push('/')
    await router.isReady()
    const wrapper = mount(SectionServices, {
      global: { plugins: [i18n, router] },
    })
    const links = wrapper
      .findAllComponents({ name: 'RouterLink' })
      .filter((l) => l.props('to') === '/pacote-de-entrada')
    expect(links).toHaveLength(2)
  })
})
