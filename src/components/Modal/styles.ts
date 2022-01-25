import styled from 'styled-components'
import { SvgIcon } from 'components/SvgIcon'

export const $Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  padding: 0 25px 25px 25px;
  background-color: ${({theme}) => theme.colors.card};
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.4);
  border-radius: 20px;
  z-index: 100;
`

export const $Close = styled(SvgIcon).attrs(() => ({ name: 'close', size: 32 }))`
  position: absolute;
  right: 20px;
  top: 25px;
  color: ${({theme}) => theme.colors.text.body};

  :hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.grey[700]};
  }
`
