import { SvgIcon } from 'components/SvgIcon'
import styled from 'styled-components'

type Props = {
  open: boolean,
}

export const $Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width:100%;
  min-width: max-content;
`

export const $Menu = styled.div<Props>`
  z-index: 20;
  position: absolute;
  right: 0;
  top: 100%;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) =>  theme.colors.dropdown};
  border-top-right-radius: ${({ open }) => open ? '0' : '20px'};
  border-top-left-radius: ${({ open }) => open ? '0' : '20px'};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow-y: auto;
`

export const $Main = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) =>  theme.colors.dropdown};
  font-family: ubuntu-light, sans-serif;
  font-style: italic;
  padding: 2px 6px 2px 12px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: ${({ open }) => open ? '0' : '20px'};
  border-bottom-left-radius: ${({ open }) => open ? '0' : '20px'};
  
  :hover {
    cursor: pointer;
  }

  path {
    fill: ${({ theme }) => theme.colors.button.primary};
  }
`

export const $MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 10px;

  :hover {
    background-color: ${({ theme }) =>  theme.colors.hover};
    cursor: pointer;
  }
`

export const $ItemLabel = styled.p`
  margin: 0;
  width: 100%;
`

export const $Arrow = styled(SvgIcon)`
  background-color: ${({ theme }) => theme.colors.text.hint};
`