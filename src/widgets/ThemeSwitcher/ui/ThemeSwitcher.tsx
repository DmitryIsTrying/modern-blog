import { memo } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Button onClick={toggleTheme} className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
