import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface SidebarItem {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ collapsed, item }: SidebarItem) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item?.isAuthOnly && !isAuth) return null

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})

SidebarItem.displayName = 'SidebarItem'
