import { FunctionComponent, SVGAttributes } from 'react'

import AboutIcon from '@/shared/assets/icons/about-icon.svg'
import MainIcon from '@/shared/assets/icons/main-icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg.svg'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
  isAuthOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    isAuthOnly: true,
  },
]
