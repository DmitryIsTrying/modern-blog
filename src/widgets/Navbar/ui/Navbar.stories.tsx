import type { Meta, StoryObj } from '@storybook/react'
import { CSSProperties } from 'react'
import { Navbar } from './Navbar'

const style: CSSProperties = {
  height: '100vh',
  width: '100%',
}

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
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
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {}
