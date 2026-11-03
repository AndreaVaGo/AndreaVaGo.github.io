import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'

const testProject = {
  name: 'Test Project',
  line: 'front',
  lineLabel: 'Frontend line',
  image: '/images/projects/test.png',
  imageAlt: 'Screenshot of Test Project',
  badges: [
    { type: 'live', label: 'Live' },
    { type: 'team', label: 'Team project' },
  ],
  description: 'A project made for testing.',
  stack: ['Vue', 'Vite'],
  links: [{ label: 'Code', url: 'https://github.com/AndreaVaGo/test-project' }],
}

function mountCard() {
  return mount(ProjectCard, {
    props: { project: testProject },
  })
}

describe('ProjectCard', () => {
  it('shows the project name as a heading', () => {
    const wrapper = mountCard()

    expect(wrapper.find('h3').text()).toBe('Test Project')
  })

  it('shows the screenshot with its alt text', () => {
    const wrapper = mountCard()
    const image = wrapper.find('img')

    expect(image.attributes('src')).toBe('/images/projects/test.png')
    expect(image.attributes('alt')).toBe('Screenshot of Test Project')
  })

  it('shows one badge per item with its type class', () => {
    const wrapper = mountCard()
    const badges = wrapper.findAll('.card__badge')

    expect(badges).toHaveLength(2)
    expect(badges[0].classes()).toContain('card__badge--live')
    expect(badges[1].classes()).toContain('card__badge--team')
  })

  it('shows one item per technology', () => {
    const wrapper = mountCard()

    expect(wrapper.findAll('.card__tech')).toHaveLength(2)
  })

  it('opens links in a new tab safely', () => {
    const wrapper = mountCard()
    const link = wrapper.find('a')

    expect(link.attributes('href')).toBe('https://github.com/AndreaVaGo/test-project')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
