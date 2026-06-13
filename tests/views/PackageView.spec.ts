import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import PackageView from '@/views/PackageView.vue'
import pt from '@/locales/pt-br.json'
import en from '@/locales/en.json'

function makeI18n() {
  return createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: { pt, en },
  })
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/pacote-de-entrada', component: PackageView },
    ],
  })
}

async function mountView() {
  const router = makeRouter()
  await router.push('/pacote-de-entrada')
  await router.isReady()
  return mount(PackageView, {
    global: {
      plugins: [makeI18n(), router],
      stubs: { SectionNavbar: true, SectionFooter: true },
    },
  })
}

describe('PackageView', () => {
  it('renders the hero title', async () => {
    const wrapper = await mountView()
    expect(wrapper.text()).toContain('Presença digital profissional para o seu negócio')
  })

  it('renders both setup and maintenance prices', async () => {
    const wrapper = await mountView()
    expect(wrapper.text()).toContain('R$ 700 – R$ 2.500')
    expect(wrapper.text()).toContain('R$ 120/mês')
  })

  it('renders all delivery items from the items list', async () => {
    const wrapper = await mountView()
    const rows = wrapper.findAll('.package-table__row')
    expect(rows).toHaveLength(9)
    expect(wrapper.text()).toContain('Landing page responsiva (celular + computador)')
  })

  it('marks the "to be agreed" item with the off status', async () => {
    const wrapper = await mountView()
    const off = wrapper.find('.package-status--off')
    expect(off.exists()).toBe(true)
    expect(off.text()).toContain('A combinar')
  })

  it('renders the maintenance bullet list', async () => {
    const wrapper = await mountView()
    const bullets = wrapper.findAll('.package-list__item')
    expect(bullets).toHaveLength(5)
    expect(wrapper.text()).toContain('Hospedagem na Vercel (infraestrutura de nível enterprise)')
  })

  it('renders the timeline with day labels via TimelineItem', async () => {
    const wrapper = await mountView()
    const labels = wrapper.findAll('.timeline-item__label')
    expect(labels).toHaveLength(6)
    expect(wrapper.text()).toContain('DIAS 15 – 17')
    expect(wrapper.text()).toContain('Entrega oficial')
  })

  it('renders the warning note', async () => {
    const wrapper = await mountView()
    expect(wrapper.find('.package-warning').exists()).toBe(true)
    expect(wrapper.text()).toContain('Atenção:')
  })

  it('renders the terms rows', async () => {
    const wrapper = await mountView()
    const rows = wrapper.findAll('.package-terms__row')
    expect(rows).toHaveLength(6)
    expect(wrapper.text()).toContain('PAGAMENTO')
    expect(wrapper.text()).toContain('25% na assinatura do contrato, 75% na entrega.')
  })

  it('renders the CTA with a link to the contact section', async () => {
    const wrapper = await mountView()
    const link = wrapper.findAllComponents({ name: 'RouterLink' }).find(
      (l) => l.props('to') === '/#contato',
    )
    expect(link).toBeDefined()
    expect(wrapper.text()).toContain('Vamos começar?')
  })
})
