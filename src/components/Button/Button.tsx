import React, { FC, HTMLProps } from 'react'
import { $Button } from './styles'

export const Button: FC<HTMLProps<HTMLButtonElement>> = ({ children, name, disabled, onClick }) => (
  <$Button
    name={name}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </$Button>
)