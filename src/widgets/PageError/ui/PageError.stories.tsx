import { PageError } from './PageError'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['widgets'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
