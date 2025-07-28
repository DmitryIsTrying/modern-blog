import { Loader } from './Loader'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['shared'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
