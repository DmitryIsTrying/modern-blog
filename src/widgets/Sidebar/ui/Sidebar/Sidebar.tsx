import { memo, useState } from 'react'

import cls from './Sidebar.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        square
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        data-testid='sidebar-toggle'
        onClick={onToggle}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <nav className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} collapsed={collapsed} item={item} />
        ))}
      </nav>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'
