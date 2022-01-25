import styled from 'styled-components'
import wave from 'assets/login_path.svg'
import logoDark from 'assets/cloudoki-light.png'
import logoLight from 'assets/cloudoki-dark.png'

export const $Login = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const $Credentials = styled.div`
  position: relative;
  top: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 410px;
  max-height: max-content;
  border-radius: 23px;
  padding: 8px 36px 19px 36px;
  background-color: ${({ theme }) => theme.colors.card};
  text-align: center;
  border: 1px solid #272C3A;
  z-index: 2;
  
  & h1 {
    margin-bottom: 0;
  }

  & button {
    margin-bottom: 10px;
  }
`

export const $Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0 10px 0;

  & input {
    margin-bottom: 20px;
  }
`

export const $Wave = styled.img.attrs(() => ({ src: wave }))`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const $Logo = styled.img.attrs(({ theme }) => ({ src: theme.name === 'light' ? logoLight : logoDark }))`
  position: absolute;
  top: 5%;
  width: 100px;
  height: 100px;
`