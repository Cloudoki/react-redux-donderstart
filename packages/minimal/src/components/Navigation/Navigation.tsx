import { SvgIcon } from 'components/SvgIcon'
import { Names } from 'components/SvgIcon/types'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from 'store/app/actions/toggleTheme'
import { logout } from 'store/auth/actions/logout'
import { $Block, $Logo, $Navigation, $NavItem, $UserItem } from './styles'
import { NavigationProps as Props } from './types'

export const Navigation: FC<Props> = ({ theme, items, user }) => {
  const dispatch = useDispatch()
  
  const userItems = [
    { label: theme === 'dark' ? 'Light mode' : 'Dark mode', icon: 'theme' as Names, onClick: () => dispatch(toggleTheme()) },
    { label: 'Logout', icon: 'power' as Names, onClick: () => dispatch(logout()) },
  ]

  return (
    <$Navigation>
      <$UserItem icon='account' label={user} items={userItems} />
      {items.map((item, idx) => 
        <$NavItem 
          key={`nav-item-${idx}`}
          to={item.path}
          selected={item.selected}>
          <SvgIcon name={item.icon} size={28} color='white' />
          {item.label}
        </$NavItem>,
      )}
      <$Block>
        <$Logo />
      </$Block>
    </$Navigation>
  )
}