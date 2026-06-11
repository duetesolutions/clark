import { describe, it, expect } from 'vitest'
import router from '@/router/index'

describe('router', () => {
  it('has a route for /', () => {
    const routes = router.getRoutes()
    const home = routes.find((r) => r.path === '/')
    expect(home).toBeDefined()
  })

  it('has a route for /pacotes/:slug', () => {
    const routes = router.getRoutes()
    const pkg = routes.find((r) => r.path === '/pacotes/:slug')
    expect(pkg).toBeDefined()
  })
})
