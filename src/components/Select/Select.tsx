import React, { FC, useEffect, useRef, useState, useCallback } from 'react'
import { $Select, $Menu, $MenuItem, $Main, $ItemLabel, $Arrow } from './styles'
import { SelectProps as Props } from './types'

export const Select: FC<Props> = ({ options, label, onChange, ...rest }) => {
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
    <$Select ref={menuRef}  onClick={handleMenuClick} {...rest}>
      <$Main open={open}>
        {label}
        <$Arrow name={open ? 'menu-up' : 'menu-down'} size={20} />
      </$Main>
      <$Menu open={open}>
        {options.map((option, idx) =>
          <$MenuItem key={`${option}-${idx}`} onClick={() => onChange(option.value)}>
            <$ItemLabel>{option.label}</$ItemLabel>
          </$MenuItem>,
        )}
      </$Menu>
    </$Select>
  )
}
