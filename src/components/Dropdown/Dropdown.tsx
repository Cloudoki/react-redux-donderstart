import { SvgIcon } from 'components/SvgIcon'
import React, { FC, useEffect, useRef, useState, useCallback } from 'react'
import { $Dropdown, $Menu, $MenuItem, $Main, $ItemLabel, $Label, $Arrow, $MenuIcon  } from './styles'
import { DropdownProps } from './types'

export const Dropdown: FC<DropdownProps> = ({ icon = 'account', iconSize = 24, items, label, inverted, nav, ...rest }) => {
  const [open, openMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = useCallback(() => openMenu(!open), [open])

  const handleEventClick = useCallback(({ target }: MouseEvent) => {
    const parent = menuRef.current
    if (parent && target && !parent.contains(target as Element)) {
      handleMenuClick()
    }
  },[handleMenuClick])

  useEffect(() => {
    if(open) {
      document.addEventListener('click', handleEventClick, false)
    }

    return () => {
      document.removeEventListener('click', handleEventClick, false)
    }
  }, [open, handleEventClick])


  return (
    <$Dropdown ref={menuRef} open={open} onClick={handleMenuClick} {...rest}>
      <$Main nav={nav}>
        <SvgIcon name={icon} size={iconSize} />
        {label &&
        <>
          <$Label>{label}</$Label>
          
          <$Arrow name={open ? 'menu-up': 'menu-down'} size={22} />
        </>
        }
      </$Main>
      <$Menu open={open} nav={nav} inverted={inverted}>
        {items.map((item, idx) =>
          <$MenuItem
            key={`${item}-${idx}`}
            onClick={item.onClick}
            inverted={inverted}
          >
            <$ItemLabel>{item.label}</$ItemLabel>
            <$MenuIcon name={item.icon} size={24} inverted={inverted} />
          </$MenuItem>,
        )}
      </$Menu>
    </$Dropdown>
  )
}
