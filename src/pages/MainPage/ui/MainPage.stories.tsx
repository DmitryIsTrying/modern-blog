import { CSSProperties } from 'react'

import { default as MainPage } from './MainPage'

import type { Meta, StoryObj } from '@storybook/react'

const style: CSSProperties = {
  height: '100vh',
  width: '100vw',
}

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['pages'],
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
