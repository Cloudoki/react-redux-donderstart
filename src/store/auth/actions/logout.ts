import { LogoutErrorAction } from './types'

export const LOGOUT = 'auth/logout'
export const LOGOUT_SUCCESS = 'auth/logout_SUCCESS'
export const LOGOUT_ERROR = 'auth/logout_ERROR'

export const logout = () => {
  return { type: LOGOUT }
}

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS }
}

export const logoutError = (payload: Omit<LogoutErrorAction, 'type'>) => {
  return { type: LOGOUT_ERROR, ...payload }
}

