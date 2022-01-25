import { Middleware } from 'redux'
import { TOGGLE_THEME } from 'store/app/actions/toggleTheme'
import { LOGIN_SUCCESS } from './actions/login'
import { LOGOUT_SUCCESS } from './actions/logout'

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)

  switch (action.type) {
    case LOGIN_SUCCESS:
      try {
        window.localStorage.setItem('usr', JSON.stringify(action.user))
      } catch(err) {
        return
      }
      break

    case TOGGLE_THEME:
      try {
        const state = store.getState()
        const theme = state.app.theme === 'dark' ? 'light' : 'dark'
        window.localStorage.setItem('theme', String(theme))
      } catch(err) {
        return
      }
      break

    case LOGOUT_SUCCESS:
      try {
        window.localStorage.removeItem('usr')
      } catch(err) {
        return
      }
      break

    default: {
      break
    }
  }
}