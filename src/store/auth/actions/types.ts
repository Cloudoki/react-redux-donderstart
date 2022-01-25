import { User } from '../types'
import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from './forgot'
import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './login'
import { LOGOUT, LOGOUT_ERROR, LOGOUT_SUCCESS } from './logout'
import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from './register'
import { RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS } from './reset'

export type AuthTypes =
  LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | ForgotPasswordAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordErrorAction
  | ResetPasswordAction
  | ResetPasswordSuccessAction
  | ResetPasswordErrorAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction

export type LoginAction = {
  type: typeof LOGIN,
  email: string,
  password: string,
}

export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS,
  user: User,
}

export type LoginErrorAction = {
  type: typeof LOGIN_ERROR,
  error: unknown,
} 

export type LogoutAction = {
  type: typeof LOGOUT,
}

export type LogoutSuccessAction = {
  type: typeof LOGOUT_SUCCESS,
}

export type LogoutErrorAction = {
  type: typeof LOGOUT_ERROR,
  error: unknown,
} 

export type ForgotPasswordAction = {
  type: typeof FORGOT_PASSWORD,
  email: string,
}

export type ForgotPasswordSuccessAction = {
  type: typeof FORGOT_PASSWORD_SUCCESS,
}

export type ForgotPasswordErrorAction = {
  type: typeof FORGOT_PASSWORD_ERROR,
  error: unknown,
} 

export type ResetPasswordAction = {
  type: typeof RESET_PASSWORD,
  password: string,
  token: string,
}

export type ResetPasswordSuccessAction = {
  type: typeof RESET_PASSWORD_SUCCESS,
}

export type ResetPasswordErrorAction = {
  type: typeof RESET_PASSWORD_ERROR,
  error: unknown,
} 

export type RegisterAction = {
  type: typeof REGISTER,
  password: string,
  token: string,
}

export type RegisterSuccessAction = {
  type: typeof REGISTER_SUCCESS,
}

export type RegisterErrorAction = {
  type: typeof REGISTER_ERROR,
  error: unknown,
} 