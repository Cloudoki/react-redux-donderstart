import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { $Modal, $Close } from './styles'
import { ModalProps as Props } from './types'

export const Modal: FC<Props> = ({ children, onClose, ...rest }) => {
  const domElement = document.getElementById('root')

  if(!domElement) return null

  return ReactDOM.createPortal(
    <$Modal {...rest}>
      <$Close onClick={onClose} />
      {children}
    </$Modal>,
    domElement)
}
