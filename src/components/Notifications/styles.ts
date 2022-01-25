import styled from 'styled-components'
import { SvgIcon } from 'components/SvgIcon'
import { Names } from 'components/SvgIcon/types'

export const $Notifications = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  display: flex;
  flex-direction: column;
  z-index: 99;
  margin-left: -150px;
`
export const $Notification = styled.div<{error: boolean}>`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 2vh;
  padding: 12px;
  color: white;
  background-color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.button.primary};
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes fadeOut {
  from {opacity: 100%;}
  to {opacity: 0%;}
  }
`

export const $Icon = styled(SvgIcon).attrs(() => ({size: 28}))<{ name: Names }>`
  margin-right: 8px;
  background-color: white;
`