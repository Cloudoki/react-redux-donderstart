import 'styled-components'
import { Theme } from 'theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'dark' | 'light',
    colors: Theme['colors'],
    dimensions: Theme['dimensions'],
  }
}