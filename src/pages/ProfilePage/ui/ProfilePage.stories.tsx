import type { Meta, StoryObj } from '@storybook/react'
import { CSSProperties } from 'react'
import { default as ProfilePage } from './ProfilePage'

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

export const Classic: Story = {}
