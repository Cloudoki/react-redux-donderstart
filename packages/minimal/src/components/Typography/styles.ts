import styled from 'styled-components'
import { FontProps } from './types'

export const $Title = styled.h1<FontProps>`
  font-size: ${({ theme }) => theme.dimensions.text.title}px;
  line-height: 1.5;
  font-family: ubuntu-bold, sans-serif;
  color: ${({ theme, color }) => color ||theme.colors.text.body };
  ${({ nomargin }) => nomargin && 'margin: 0'};
`

export const $Subtitle = styled.h2<FontProps>`
  font-size: ${({ theme }) => theme.dimensions.text.subTitle}px;
  line-height: 1.5;
  font-family: ${({ italic }) => italic ? 'ubuntu-italic' : 'ubuntu-bold' };
  color: ${({ theme, color }) => color ||theme.colors.text.body };
  ${({ nomargin }) => nomargin && 'margin: 0'};
`

export const $Paragraph = styled.p<FontProps>`
  font-size: ${({ theme }) => theme.dimensions.text.body}px;
  line-height: 1;
  font-family: ${({ italic, light, bold }) => italic ? 'ubuntu-italic' : light ? 'ubuntu-light' : bold ? 'ubuntu-bold' : 'ubuntu-regular' };
  color: ${({ theme, color }) => color ||theme.colors.text.body };
  ${({ nomargin }) => nomargin && 'margin: 0'};

  :hover {
    cursor: ${({ hover }) => hover ? 'pointer' : 'default'};
    text-decoration: ${({ hover }) => hover ? 'underline' : 'none'};
  }
`
export const $Label = styled.p<FontProps>`
  font-size: ${({ theme }) => theme.dimensions.text.label}px;
  line-height: 1;
  font-family: ${({ italic, light }) => italic ? 'ubuntu-italic' : light ? 'ubuntu-light' : 'ubuntu-regular' };
  color: ${({ theme, color }) => color ||theme.colors.text.body};
  ${({ nomargin }) => nomargin && 'margin: 0'};
  
  :hover {
    cursor: ${({ hover }) => hover ? 'pointer' : 'default'};
    text-decoration: ${({ hover }) => hover ? 'underline' : 'none'};
  }
`