import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
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

async function mountNavbar(props: Record<string, unknown>) {
  const { i18n, router } = setup()
  await router.push('/')
  await router.isReady()
  return mount(SectionNavbar, {
    props,
    global: { plugins: [i18n, router] },
  })
}

describe('SectionNavbar', () => {
  it('shows the back-to-site link in backLink mode', async () => {
    const wrapper = await mountNavbar({ backLink: true })
    const back = wrapper.find('.nav-back-link')
    expect(back.exists()).toBe(true)
    expect(back.text()).toContain('Voltar ao site')
  })

  it('back-to-site link points to /', async () => {
    const wrapper = await mountNavbar({ backLink: true })
    const link = wrapper.findAllComponents({ name: 'RouterLink' }).find(
      (l) => l.props('to') === '/',
    )
    expect(link).toBeDefined()
  })

  it('hides home nav links in backLink mode', async () => {
    const wrapper = await mountNavbar({ backLink: true })
    expect(wrapper.text()).not.toContain('Serviços')
  })

  it('shows home nav links by default', async () => {
    const wrapper = await mountNavbar({})
    expect(wrapper.find('.nav-back-link').exists()).toBe(false)
    expect(wrapper.text()).toContain('Serviços')
  })
})
