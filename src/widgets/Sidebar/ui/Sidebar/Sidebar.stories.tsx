import { CSSProperties } from 'react'

import { Sidebar } from './Sidebar'

import type { Meta, StoryObj } from '@storybook/react'

const style: CSSProperties = {
  width: '100%',
}

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['widgets'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => {
      return (
        <div style={style}>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
