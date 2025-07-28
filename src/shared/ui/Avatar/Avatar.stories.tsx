import { Avatar } from './Avatar'

import type { Meta, StoryObj } from '@storybook/react'

import AvatarImg from '@/shared/assets/tests/storybook-test-photo.jpg'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['shared'],

  args: {
    alt: 'TEST ALT',
    src: AvatarImg,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
export const Small: Story = {
  args: { size: 50 },
}
