import { Dropdown } from 'components/Dropdown'
import { Modal } from 'components/Modal'
import { SvgIcon } from 'components/SvgIcon'
import styled from 'styled-components'

export const $Projects = styled.div<{pagination?: boolean}>`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  padding: 50px 10% 10% 10%;
  height: 100%;
  overflow: auto;

  h1 {
    margin-bottom: 45px;
  }

  button {
    width: 300px;
    margin-top: ${({ pagination }) => pagination ? '-30px' : '35px'};
  }
`

export const $Cell = styled.div<{direction?: 'row' | 'column'}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: space-between;
  width: 100%;
`
export const $Name = styled.p<{ bold?: boolean}>`
  text-align: center;
  width: 50%;
  margin: 0;
  ${({ bold }) => bold && 'font-family: ubuntu-bold, sans-serif;'};
`
export const $Inputs = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  width: 100%;
  padding: 20px 25px 25px 25px;

  & h2 {
    margin-bottom: 25px;
  }

  & input {
    margin-bottom: 20px;
  }

  & button {
    margin-top: 10px;
  }
`

export const $Actions = styled(Dropdown).attrs(() => ({ inverted: true }))`  
  >div {
    left: 85%;
    p {
      padding: 0 0 0 4px;
    }
  }

  >div:nth-child(2) {
    width: max-content;
  }
`

export const $Copy = styled(SvgIcon).attrs(() => ({ name: 'copy' }))`
  margin-left: 15px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.text.hint};
  }
  
  :active {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`

export const $DeleteModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  padding: 20px 25px 25px 25px;

  h2 {
    margin-bottom: 40px;
  }
`

export const $DeleteActions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: space-between;

  button {
    min-width: 80px;
    max-width: 120px;
  }

  button:first-child {
    background-color: ${({ theme }) => theme.colors.error};
  }

  button:last-child {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.inverted};
    border: 2px solid ${({ theme }) => theme.colors.inverted};
  }
`