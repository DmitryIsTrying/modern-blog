import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['ui', 'buttons'],
  argTypes: {
    onClick: {
      action: 'clicked', // Логирование кликов
      table: {
        category: 'Events', // Группировка в документации
      },
    },
  },
  args: {
    children: 'Text',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
}

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
}

export const Outlined: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const SquareSizeM: Story = {
  args: {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND,
  },
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
  },
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
  },
}

export const OutlinedSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
}

export const OutlinedSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    disabled: true,
  },
}
