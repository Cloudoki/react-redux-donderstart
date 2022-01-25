import React, { FC } from 'react'
import { $Message, $NotFound, $Number } from './styles'

export const NotFound: FC = () => (
  <$NotFound>
    <$Message>Whoops, this page went places...</$Message>
    <$Number>404</$Number>
  </$NotFound>
)