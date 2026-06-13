import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TimelineItem from '@/components/ui/TimelineItem.vue'

describe('TimelineItem', () => {
  it('renders the optional label when provided', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        step: '01',
        label: 'DIA 1',
        title: 'Brainstorm',
        description: 'Alinhamento de ideias.',
      },
    })
    expect(wrapper.find('.timeline-item__label').exists()).toBe(true)
    expect(wrapper.find('.timeline-item__label').text()).toBe('DIA 1')
  })

  it('omits the label element when no label is provided', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        step: '01',
        title: 'Brainstorm',
        description: 'Alinhamento de ideias.',
      },
    })
    expect(wrapper.find('.timeline-item__label').exists()).toBe(false)
  })
})
