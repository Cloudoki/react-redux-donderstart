import styled from 'styled-components'

type Props = {
  icon: string,
  size?: number,
  color?: string,
  inverted?: boolean,
}

export const $Icon = styled.div<Props>`
  ${({ size }) => size && `width:${size}px; height:${size}px`};
  background-color: ${({ theme, inverted, color }) =>  color || (inverted ? theme.colors.inverted : theme.colors.text.body)}; 
  mask: url(${({ icon }) => icon }) no-repeat center / contain;
`
