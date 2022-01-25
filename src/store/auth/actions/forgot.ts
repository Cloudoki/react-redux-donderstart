import { ForgotPasswordAction, ForgotPasswordErrorAction } from './types'

export const FORGOT_PASSWORD = 'auth/FORGOT_PASSWORD'
export const FORGOT_PASSWORD_SUCCESS = 'auth/FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_ERROR = 'auth/FORGOT_PASSWORD_ERROR'

export const forgotPassword = (payload: Omit<ForgotPasswordAction, 'type'>) => {
  return { type: FORGOT_PASSWORD, ...payload }
}

export const forgotPasswordSuccess = () => {
  return { type: FORGOT_PASSWORD_SUCCESS }
}

export const forgotPasswordError = (payload: Omit<ForgotPasswordErrorAction, 'type'>) => {
  return { type: FORGOT_PASSWORD_ERROR, ...payload }
}

