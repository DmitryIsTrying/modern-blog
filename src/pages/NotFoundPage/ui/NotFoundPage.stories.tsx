import type { Meta, StoryObj } from '@storybook/react'
import { CSSProperties } from 'react'
import { NotFoundPage } from './NotFoundPage'

const style: CSSProperties = {
  height: '100vh',
  width: '100vw',
}

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['pages'],
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
