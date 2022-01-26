import styled from 'styled-components'

export const $Input = styled.input`
  width: 100%;
  border-radius: 20px;
  outline: none;
  border: solid 1px ${({ theme }) => theme.colors.border};
  height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.body};
  font-size: ${({ theme }) => theme.dimensions.text.body}px;
  padding: 12px;

  ::placeholder {
    font-size: 14px;
    font-family: Ubuntu-Light, sans-serif;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.body};
  }
`