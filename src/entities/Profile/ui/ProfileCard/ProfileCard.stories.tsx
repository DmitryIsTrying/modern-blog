import { ProfileCard } from './ProfileCard'

import type { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import AvatarImg from '@/shared/assets/tests/storybook-test-photo.jpg'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['ui', 'entities'],
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {
  args: {
    data: {
      first: 'Yellow',
      lastname: 'Black',
      age: 19,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'altair',
      avatar: AvatarImg,
    },
    readOnly: true,
  },
}
export const Loading: Story = {
  args: { isLoading: true },
}
export const WithError: Story = {
  args: { error: 'something went wrong' },
}
