import { MouseEvent } from 'react'

export interface SvgIconProps {
  name: Names,
  size?: number,
  color?: string,
  onClick?: (e: MouseEvent) => void,
}

export interface IconPaths {
  [iconName: string]: string,
}

export type Names =
'overview'
| 'account'
| 'menu-up'
| 'menu-down'
| 'menu-left'
| 'menu-right'
| 'theme'
| 'power'
| 'email'
| 'globe'
| 'accounts'
| 'close'
| 'close-circle'
| 'menu-vertical'
| 'delete'
| 'edit'
| 'add'
| 'copy'
| 'alert-circle'
| 'send'