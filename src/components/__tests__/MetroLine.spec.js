import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import MetroLine from '../MetroLine.vue'

const backendLine = {
  id: 'back',
  name: 'Línea Backend',
  stations: [
    { name: 'Java 21' },
    { name: 'Spring Boot', project: 'Goxu' },
    { name: 'Acompáñame', final: true },
  ],
}

function mountLine(props = {}) {
  return mount(MetroLine, {
    props: { line: backendLine, ...props },
    global: {
      plugins: [createPinia()],
    },
  })
}

describe('MetroLine', () => {
  it('shows one item per station', () => {
    const wrapper = mountLine()

    expect(wrapper.findAll('li')).toHaveLength(3)
  })

  it('shows project tags only for stations with a project', () => {
    const wrapper = mountLine()
    const projects = wrapper.findAll('.line__project')

    expect(projects).toHaveLength(1)
    expect(projects[0].text()).toBe('Goxu')
  })

  it('marks the final station', () => {
    const wrapper = mountLine()
    const finalStation = wrapper.find('.line__station--final')

    expect(finalStation.text()).toContain('Acompáñame')
    expect(finalStation.text()).toContain('Final de trayecto')
  })

  it('is not active by default', () => {
    const wrapper = mountLine()

    expect(wrapper.classes()).not.toContain('line--active')
  })

  it('gets the active class when the prop is true', () => {
    const wrapper = mountLine({ active: true })

    expect(wrapper.classes()).toContain('line--active')
  })
})
