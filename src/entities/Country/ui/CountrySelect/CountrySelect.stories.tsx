import { CountrySelect } from './CountrySelect'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  tags: ['entities'],
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
