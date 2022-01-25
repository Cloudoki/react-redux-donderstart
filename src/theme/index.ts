
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import fontRegular from 'assets/fonts/Ubuntu-Regular.woff2'
import fontBold from 'assets/fonts/Ubuntu-Bold.woff2'
import fontLight from 'assets/fonts/Ubuntu-Light.woff2'
import fontMedium from 'assets/fonts/Ubuntu-Medium.woff2'

const light = {
  primary: '#FFB151',
  secondary: '#5196D7',
  error: '#E57373',
  background: '#F8F9FA',
  inverted: '#1D1F2A',
  navbar: '#0068A6',
  card: '#F8F9FA',
  hover: '#F1F1F1',
  highlight: 'rgba(255,255,255,0.2)',
  dropdown: '#BEBEBE',
  border: '#1D1F24',
  text: {
    label: '#5C5D63',
    body: '#1D1F2A',
    disabled: '#DBDEE1',
    hint: '#E97F1F',
  },
  button: {
    primary: '#E97F1F',
    secondary: '#E27D24',
    disabled: 'rgba(233, 127, 31, 0.2)',
    hover: '#B15300',
  },
  grey: {
    50: 'rgba(255,255,255,0.2)',
    100: 'rgba(240,240,240,0.2)',
    200: 'rgba(240,240,240,0.5)',
    300: '#EAEAEA',
    400: '#BEBEBE',
    500: 'rgba(231,18,14,0.4)',
    600: '#636875',
    700: '#515560',
  },
}

const dark = {
  primary: '#B15300',
  secondary: '#003E76',
  error: '#840608',
  background: '#1D1F2A',
  inverted: '#F8F9FA',
  navbar: '#0068A6',
  card: '#272C3A',
  hover: '#3D4353',
  highlight: 'rgba(29,31,42,0.4)',
  dropdown: '#515560',
  border: '#E97F1F',
  text: {
    label: '#979797',
    body: '#FFFFFF',
    disabled: '#DBDEE1',
    hint: '#E97F1F',
  },
  button: {
    primary: '#E97F1F',
    secondary: '#E27D24',
    disabled: 'RGBA(233, 127, 31, 0.2)',
    hover: '#B15300',
  },
  grey: {
    50: 'rgba(255,255,255,0.2)',
    100: 'rgba(240,240,240,0.2)',
    200: 'rgba(240,240,240,0.5)',
    300: '#EAEAEA',
    400: '#BEBEBE',
    500: 'rgba(231,18,14,0.4)',
    600: '#636875',
    700: '#515560',
  },
}

const dimensions = {
  text: {
    title: 42,
    subTitle: 32,
    body: 18,
    label: 16,
  },
}

export type Theme = typeof themeLight

export const themeLight: DefaultTheme = {
  name: 'light',
  colors: light,
  dimensions,
}

export const themeDark: DefaultTheme = {
  name: 'dark',
  colors: dark,
  dimensions,
}

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: ubuntu-regular;
    src: url(${fontRegular});
    font-style: normal;
  }

  @font-face {
    font-family: ubuntu-medium;
    src: url(${fontMedium});
    font-style: normal;
  }

  @font-face {
    font-family: ubuntu-bold;
    src: url(${fontBold});
    font-style: normal;
  }

  @font-face {
    font-family: ubuntu-light;
    src: url(${fontLight});
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.body};
    font-family: ubuntu-regular, sans-serif;
  }
  
  #root {
    width: inherit;
    height: inherit;
    display: grid;
    grid-template-columns: 1fr 8fr;
  }

  a {
    color: inherit; 
    text-decoration: none;
  }
`

