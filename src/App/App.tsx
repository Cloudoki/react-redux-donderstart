import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themeLight, themeDark } from 'theme'
import { Navigation } from 'components/Navigation'
import { Routing } from 'constants/global'
import { useLocation } from 'react-router-dom'
import { routes } from './routes'
import { useSelector } from 'react-redux'
import { Store } from 'store/types'
import { Names } from 'components/SvgIcon/types'
import { Notifications } from 'components/Notifications'

export const App = () => {
  const { pathname } = useLocation()
  const { theme, user } = useSelector(({ app, auth }: Store) => ({ theme: app.theme, user: auth.user }))
  const isDash = [Routing.HOME].some((val) => {
    const path = pathname.split('/')[1]
    const value = val.split('/')[1]
    return path === value
  })

  const navItems = [
    {icon: 'overview' as Names, label: 'Overview', path: Routing.HOME, selected: pathname === Routing.HOME },
    {icon: 'email' as Names, label: 'E-mails', path: '/' , selected: false },
    {icon: 'globe' as Names, label: 'Rates & Languages', path: '/', selected: false },
    {icon: 'account' as Names, label: 'Users', path: '/', selected: false },
  ]

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <GlobalStyle />
      <Notifications />
      {isDash && <Navigation theme={theme} user={user?.name.split(' ')[0] || ''} items={navItems} />}
      {routes()}
    </ThemeProvider>
  )
}
