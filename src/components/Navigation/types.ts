import { Names } from 'components/SvgIcon/types'

export type NavigationProps = {
  items: NavItem[],
  user: string,
  theme: 'dark' | 'light',
}

type NavItem = {
  icon: Names,
  label: string,
  path: string,
  selected: boolean,
}