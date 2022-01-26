/* stylelint-disable */
import { SvgIcon } from 'components/SvgIcon'
import styled from 'styled-components'

export const $TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const $Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  overflow-x: auto;
  
  tr {
    background-color: ${({ theme }) => theme.colors.card};
  }
`

export const $Body = styled.tbody`
  tr td:first-child { border-left: 1px solid ${({ theme }) => theme.colors.inverted}; }
  tr td:last-child { border-right: 1px solid ${({ theme }) => theme.colors.inverted}; }
  tr:last-child td:first-child { border-bottom-left-radius: 20px; }
  tr:last-child td:last-child { border-bottom-right-radius: 20px; }
  font-size: 14px;
  font-family: ubuntu-regular, sans-serif;
  
  tr:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`

export const $Row = styled.tr`
  border-radius: inherit;
`

export const $Head = styled.thead`
  font-size: ${({ theme }) => theme.dimensions.text.label}px;
  font-family: ubuntu-medium, sans-serif;
  tr td:last-child { border-right: 1px solid ${({ theme }) => theme.colors.inverted}; }
  tr td:first-child { border-left: 1px solid ${({ theme }) => theme.colors.inverted}; }
  tr:first-child td:first-child { border-top-left-radius: 20px; }
  tr:first-child td:last-child { border-top-right-radius: 20px; }

  td {
    padding: 15px;
  }

`

export const $Cell = styled.td`
  border-top: 1px solid ${({ theme }) => theme.colors.inverted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.inverted};
  min-height: 40px;
  padding: 15px;
`

export const $Pagination = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  width: max-content;
  margin-top: 25px;
`

export const $Page = styled.div<{selected: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ theme, selected }) => selected ? theme.colors.text.hint : 'transparent'};

  :hover {
    cursor: pointer;
  }
`

export const $Previous = styled(SvgIcon).attrs(() => ({ name: 'menu-left', size: 24 }))`
  background-color: ${({ theme }) => theme.colors.text.hint};
  :hover {
    cursor: pointer;
  }
`

export const $Next = styled(SvgIcon).attrs(() => ({ name: 'menu-right', size: 24 }))`
  background-color: ${({ theme }) => theme.colors.text.hint};
  :hover {
    cursor: pointer;
  }
`