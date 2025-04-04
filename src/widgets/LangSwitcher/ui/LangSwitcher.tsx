import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { memo } from 'react'
import cls from './LangSwitcher.module.scss'

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
