import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLanguageStore } from '../language'

describe('language store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts in spanish', () => {
    const store = useLanguageStore()

    expect(store.lang).toBe('es')
    expect(store.texts.hero.station).toBe('Estación')
  })

  it('switches to english', () => {
    const store = useLanguageStore()

    store.setLanguage('en')

    expect(store.lang).toBe('en')
    expect(store.texts.hero.station).toBe('Station')
  })

  it('updates the html lang attribute', () => {
    const store = useLanguageStore()

    store.setLanguage('en')

    expect(document.documentElement.lang).toBe('en')
  })
})
