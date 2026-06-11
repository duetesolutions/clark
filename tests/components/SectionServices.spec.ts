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
      { path: '/pacotes/:slug', component: { template: '<div />' } },
    ],
  })
  return { i18n, router }
}

describe('SectionServices', () => {
  it('portfolio card links to /pacotes/portfolio', async () => {
    const { i18n, router } = setup()
    await router.push('/')
    await router.isReady()
    const wrapper = mount(SectionServices, {
      global: { plugins: [i18n, router] },
    })
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    const portfolioLink = links.find((l) => l.props('to') === '/pacotes/portfolio')
    expect(portfolioLink).toBeDefined()
  })

  it('landing card links to /pacotes/landing-page', async () => {
    const { i18n, router } = setup()
    await router.push('/')
    await router.isReady()
    const wrapper = mount(SectionServices, {
      global: { plugins: [i18n, router] },
    })
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    const landingLink = links.find((l) => l.props('to') === '/pacotes/landing-page')
    expect(landingLink).toBeDefined()
  })
})
