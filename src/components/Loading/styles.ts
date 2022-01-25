import styled from 'styled-components'
import loading from 'assets/loading.svg'

export const $Loading = styled.img.attrs(() => ({ src: loading }))`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 80px;
  height: 80px;
`