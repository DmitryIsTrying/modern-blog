import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './LangSwitcher.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button onClick={toggle} className={classNames(cls.langSwitcher, {}, [className])}>
      {t(short ? 'Короткий Язык' : 'Язык')}
    </Button>
  )
})

LangSwitcher.displayName = 'LangSwitcher'
