import { describe, it, expect, vi } from 'vitest'
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
      { path: '/pacotes/:slug', component: PackageView },
      { path: '/', component: { template: '<div />' } },
    ],
  })
}

async function mountForSlug(slug: string) {
  const router = makeRouter()
  await router.push(`/pacotes/${slug}`)
  await router.isReady()
  return mount(PackageView, {
    global: {
      plugins: [makeI18n(), router],
      stubs: { SectionNavbar: true, SectionFooter: true },
    },
  })
}

describe('PackageView', () => {
  it('renders portfolio package name', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Site Portfólio')
  })

  it('renders portfolio price', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('R$ 700')
  })

  it('renders landing package name', async () => {
    const wrapper = await mountForSlug('landing-page')
    expect(wrapper.text()).toContain('Landing Page Pro')
  })

  it('renders landing price', async () => {
    const wrapper = await mountForSlug('landing-page')
    expect(wrapper.text()).toContain('R$ 1.200')
  })

  it('renders features list for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Design personalizado (sem templates)')
  })

  it('renders timeline steps for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Briefing')
  })

  it('renders FAQ for portfolio', async () => {
    const wrapper = await mountForSlug('portfolio')
    expect(wrapper.text()).toContain('Quais seções estão incluídas?')
  })

  it('redirects to / for unknown slug', async () => {
    const router = makeRouter()
    const replaceSpy = vi.spyOn(router, 'replace')
    await router.push('/pacotes/unknown')
    await router.isReady()
    mount(PackageView, {
      global: {
        plugins: [makeI18n(), router],
        stubs: { SectionNavbar: true, SectionFooter: true },
      },
    })
    await new Promise((r) => setTimeout(r, 0))
    expect(replaceSpy).toHaveBeenCalledWith('/')
  })
})
