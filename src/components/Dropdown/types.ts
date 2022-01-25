import { Names } from '../SvgIcon/types'

export type DropdownProps = {
  icon: Names,
  items: DropdownItem[],
  label?: string,
  iconSize?: number,
  fontSize?: number,
  inverted?: boolean,
  nav?: boolean,
}

export type DropdownItem = {
  label: string,
  icon: Names, 
  onClick?: () => void | { type: string },
}
