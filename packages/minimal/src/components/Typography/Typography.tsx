import React, { FC } from 'react'
import { $Title, $Subtitle, $Paragraph, $Label } from './styles'
import { FontProps as Props } from './types'

export const Title: FC<Props> = 
  ({ children, ...props  }) => <$Title {...props}>{children}</$Title>

export const Subtitle: FC<Props> = 
  ({ children, ...props  }) => <$Subtitle {...props}>{children}</$Subtitle>

export const Paragraph: FC<Props> = 
  ({ children, ...props  }) => <$Paragraph {...props}>{children}</$Paragraph>

export const Label: FC<Props> = 
  ({ children, ...props }) => <$Label {...props}>{children}</$Label>