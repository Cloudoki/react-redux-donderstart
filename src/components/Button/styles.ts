import styled from 'styled-components'

export const $Button = styled.button`
  width: 100%;
  border-radius: 20px;
  min-height: 40px;
  border: none;
  text-align: center;
  font-family: ubuntu-bold, sans-serif;
  color: white;
  background-color: ${({ theme }) => theme.colors.button.primary};
  font-size: ${({ theme }) => theme.dimensions.text.body}px;
  padding: 12px;
  line-height: 0;
  
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
  }
  
  :hover:disabled {
    cursor: not-allowed;
  }
  
`