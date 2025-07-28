import { default as LoginForm } from './LoginForm'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['ui', 'feature'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
export const Loading: Story = {
  parameters: { redux: { initialState: { login: { isLoading: true } } } },
}
export const WithError: Story = {
  parameters: {
    redux: { initialState: { login: { error: 'Something went wrong...' } } },
  },
}
