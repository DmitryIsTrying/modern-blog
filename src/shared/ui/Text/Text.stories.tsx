import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['ui'],
  args: {
    text: 'Hello everyone',
    title: 'Keep grinding',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {
  args: {
    text: 'Hello everyone',
    title: 'Keep grinding',
  },
}

export const OnlyTitle: Story = {
  args: {
    text: undefined,
  },
}

export const OnlyText: Story = {
  args: {
    title: undefined,
  },
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
  },
}
