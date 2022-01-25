import React, { FC, InputHTMLAttributes } from 'react'
import { $Input } from './styles'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, value, placeholder, type, onChange, ...rest }) =>  (
  <$Input 
    name={name}
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={onChange}
    {...rest}
  />
)
