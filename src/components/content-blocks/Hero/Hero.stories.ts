import type { Meta, StoryObj } from '@storybook/web-components'
import type { HeroProps } from './Hero'
import { Hero } from './Hero'

const common_alignment = [
  'none',
  'center',
  'top left',
  'top middle',
  'top right',
  'middle left',
  'middle right',
  'bottom left',
  'bottom middle',
  'bottom right'
]

const meta = {
  title: 'Content block/Hero',
  render: (args) => Hero(args),
  argTypes: {
    wide_alignment: {
      name: 'Wide Alignment',
      type: { name: 'string', required: true },
      control: 'select',
      options: common_alignment
    },
    large_alignment: {
      name: 'Large Alignment',
      type: { name: 'string', required: true },
      control: 'select',
      options: common_alignment
    },
    mobile_alignment: {
      name: 'Mobile Alignment',
      type: { name: 'string', required: true },
      control: 'select',
      options: common_alignment
    },
    wide_image: { name: 'Wide Image', type: { name: 'string', required: true } },
    large_image: { name: 'Large Image', type: { name: 'string', required: true } },
    mobile_image: { name: 'Mobile Image', type: { name: 'string', required: true } },
    mobile_alt: { name: 'Mobile Alt' },
    display_page_title: { name: 'Display Page Title' },
    page_title: { name: 'Page Title' }
  }
} satisfies Meta<HeroProps>

export default meta
type Story = StoryObj<HeroProps>

export const Image: Story = {
  args: {
    wide_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    wide_alignment: 'center center',
    large_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    large_alignment: 'center center',
    mobile_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    mobile_alt: 'Mobile Alt',
    mobile_alignment: 'center center',
    display_page_title: true,
    page_title: 'Hello World helo'
  }
}
export const OnlyImage: Story = {
  args: {
    wide_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    wide_alignment: 'center center',
    large_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    large_alignment: 'center center',
    mobile_image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    mobile_alt: 'Mobile Alt',
    mobile_alignment: 'center center',
    display_page_title: false
  }
}
