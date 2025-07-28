import { CSSProperties } from 'react'

import { default as AboutPage } from './AboutPage'

import type { Meta, StoryObj } from '@storybook/react'

const style: CSSProperties = {
  height: '100vh',
  width: '100vw',
}

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['pages'],
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
