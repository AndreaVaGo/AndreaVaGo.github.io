import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import App from '../App.vue'

function mountApp() {
  return mount(App, {
    global: {
      plugins: [createPinia()],
    },
  })
}

describe('App', () => {
  it('renders the portfolio owner name', () => {
    const wrapper = mountApp()

    expect(wrapper.text()).toContain('Andrea Vallina')
  })

  it('shows texts in english after clicking EN', async () => {
    const wrapper = mountApp()
    const englishButton = wrapper.findAll('button')[1]

    await englishButton.trigger('click')

    expect(wrapper.text()).toContain('Station')
  })
})
