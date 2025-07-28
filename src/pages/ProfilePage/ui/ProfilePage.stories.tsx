import { CSSProperties } from 'react'

import { default as ProfilePage } from './ProfilePage'

import type { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

const style: CSSProperties = {
  height: '100vh',
  width: '100vw',
}

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['pages'],
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {
  parameters: {
    redux: {
      initialState: {
        profile: {
          form: {
            first: 'Yellow',
            lastname: 'Black',
            age: 19,
            currency: Currency.RUB,
            country: Country.RUSSIA,
            city: 'Moscow',
            username: 'altair',
          },
          readonly: true,
        },
      },
    },
  },
}
