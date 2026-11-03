import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import MetroTicket from '../MetroTicket.vue'

function mountTicket(props = {}) {
  return mount(MetroTicket, {
    props,
    global: {
      plugins: [createPinia()],
    },
  })
}

describe('MetroTicket', () => {
  it('shows the six ticket fields', () => {
    const wrapper = mountTicket()

    expect(wrapper.findAll('dt')).toHaveLength(6)
  })

  it('shows the passenger name', () => {
    const wrapper = mountTicket()

    expect(wrapper.text()).toContain('Andrea Vallina González')
  })

  it('is not inserted by default', () => {
    const wrapper = mountTicket()

    expect(wrapper.classes()).not.toContain('ticket--inserted')
  })

  it('gets the inserted class when the prop is true', () => {
    const wrapper = mountTicket({ inserted: true })

    expect(wrapper.classes()).toContain('ticket--inserted')
  })
})
