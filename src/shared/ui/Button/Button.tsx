import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button = ({
  className,
  children,
  square,
  size = ButtonSize.M,
  theme = ButtonTheme.CLEAR,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button disabled={disabled} className={classNames(cls.button, mods, [className, cls[theme], cls[size]])} {...props}>
      {children}
    </button>
  )
}
