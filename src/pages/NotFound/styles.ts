import styled from 'styled-components'

export const $NotFound = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 100;
`

export const $Message = styled.h1`
  font-size: 42px;
  margin: 0;
`
export const $Number = styled.h1`
  color: ${({ theme }) => theme.colors.text.hint};
  font-size: 120px;
  margin: 50px 0 0 0;
`