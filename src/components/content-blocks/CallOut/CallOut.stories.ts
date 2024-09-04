import type { Meta, StoryObj } from '@storybook/web-components'
import type { CallOutProps } from './CallOut'
import { CallOut } from './CallOut'

const meta = {
  title: 'Content block/CallOut',
  render: (args) => CallOut(args),
  argTypes: {
    page_title: { name: 'Page Title' }
  }
} satisfies Meta<CallOutProps>

export default meta
type Story = StoryObj<CallOutProps>

export const Default: Story = {
  args: {
    page_title: 'CallOut Title'
  }
}