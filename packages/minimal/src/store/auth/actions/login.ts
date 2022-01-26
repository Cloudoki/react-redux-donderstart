import { LoginAction, LoginErrorAction, LoginSuccessAction } from './types'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'auth/LOGIN_ERROR'

export const login = (payload: Omit<LoginAction, 'type'>) => {
  return { type: LOGIN, ...payload }
}

export const loginSuccess = (payload: Omit<LoginSuccessAction, 'type'>) => {
  return { type: LOGIN_SUCCESS, ...payload }
}

export const loginError = (payload: Omit<LoginErrorAction, 'type'>) => {
  return { type: LOGIN_ERROR, ...payload }
}

