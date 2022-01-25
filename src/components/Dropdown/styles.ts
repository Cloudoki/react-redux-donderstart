import { SvgIcon } from 'components/SvgIcon'
import styled from 'styled-components'

type Props = {
  open: boolean,
  inverted?: boolean,
  nav?: boolean,
}

export const $Dropdown = styled.div<{open: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-bottom-right-radius: ${({ open }) => open ? '0' : '20px'};
`

export const $Menu = styled.div<Props>`
  z-index: 20;
  box-sizing: inherit;
  position: absolute;
  right: 0;
  top: 100%;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  min-width: max-content;
  height: max-content;
  background-color: ${({ theme, inverted }) => inverted ? theme.colors.inverted : theme.colors.background};
  ${({ inverted, theme }) => inverted && `color: ${theme.colors.background}`};
  ${({ nav }) => nav ? 'border-bottom-right-radius: 20px' : 'border-radius: 20px'};

  div:first-child {
    ${({ nav }) => !nav && `
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;`}
  }

  div:last-child {
    ${({ nav }) => nav ? 'border-bottom-right-radius: 20px;' : `
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;`}
  }
`

export const $Main = styled.div<{ nav?: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  padding-left: 20px;
  font-size: ${({ theme }) => theme.dimensions.text.label}px;
  font-family: ubuntu-medium, sans-serif;

  div:last-child {
    position: absolute;
    right: 15px;

    path {
      ${({ nav, theme }) => nav && `fill: ${theme.colors.button.primary}`};
    }
  }

  :hover {
    cursor: pointer;
  }
`

export const $MenuItem = styled.div<{inverted?: boolean}>`
  box-sizing: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: max-content;
  padding: 14px 18px 14px 14px;

  :hover {
    background-color: ${({ theme, inverted }) => inverted ? theme.colors.highlight : theme.colors.card};
    cursor: pointer;
  }
`
export const $Label = styled.p`
  margin: 0;
  width: 60%;
  text-align: center;
`
export const $ItemLabel = styled.p`
  margin: 0 5px 0 0;
  padding-left: 40px;
  width: 100%;
  font-family: ubuntu-medium, sans-serif;
`

export const $Arrow = styled(SvgIcon)`
  background-color: ${({ theme }) => theme.colors.text.hint};
`
export const $MenuIcon = styled(SvgIcon)<{inverted?: boolean}>`
  background-color: ${({ theme, inverted }) => inverted ? theme.colors.background : theme.colors.inverted};
`