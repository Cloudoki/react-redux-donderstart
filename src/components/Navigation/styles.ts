import styled from 'styled-components'
import logoDark from 'assets/cloudoki-light.png'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'components/Dropdown'


export const $Navigation = styled.div`
  grid-column: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 190px;
  background-color: ${({ theme }) => theme.colors.navbar};
  border-radius: 0 20px 20px 0;
  padding: 40px 0 40px 0;
`

export const $NavItem = styled(NavLink)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  min-height: 55px;
  width: 85%;
  border-radius: 100px 0 0 100px;
  font-size: ${({ theme }) => theme.dimensions.text.body}px;
  font-family: ubuntu-medium, sans-serif;
  color: white;
  word-wrap: break-word;
  margin-bottom: 5px;
  ${({ theme, selected }) => selected && `background-color: ${theme.colors.highlight}`};

  >div {
    margin-right: 15px;
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`

export const $UserItem = styled(Dropdown).attrs(() => ({ nav: true }))`
  align-self: flex-start;
  min-height: 50px;
  min-width: 85%;
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const $Block = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`

export const $Logo = styled.img.attrs(() => ({ src: logoDark }))`
  align-self: center;
  width: 80px;
  height: 80px;
`