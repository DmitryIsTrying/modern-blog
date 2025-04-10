import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['shared'],
  args: {
    label: 'TEST LABEL',
    options: [
      { content: 'First option', value: '1' },
      { content: 'Second option', value: '2' },
      { content: 'Third option', value: '3' },
    ],
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
