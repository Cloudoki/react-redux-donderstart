import { ResetPasswordAction, ResetPasswordErrorAction } from './types'

export const RESET_PASSWORD = 'auth/RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'auth/RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'auth/RESET_PASSWORD_ERROR'

export const resetPassword = (payload: Omit<ResetPasswordAction, 'type'>) => {
  return { type: RESET_PASSWORD, ...payload }
}

export const resetPasswordSuccess = () => {
  return { type: RESET_PASSWORD_SUCCESS }
}

export const resetPasswordError = (payload: Omit<ResetPasswordErrorAction, 'type'>) => {
  return { type: RESET_PASSWORD_ERROR, ...payload }
}

