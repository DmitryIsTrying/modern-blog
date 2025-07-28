import { CurrencySelect } from './CurrencySelect'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['entities'],
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
