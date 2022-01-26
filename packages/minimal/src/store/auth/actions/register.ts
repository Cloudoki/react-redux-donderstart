import { RegisterAction, RegisterErrorAction } from './types'

export const REGISTER = 'auth/REGISTER'
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
export const REGISTER_ERROR = 'auth/REGISTER_ERROR'

export const register= (payload: Omit<RegisterAction, 'type'>) => {
  return { type: REGISTER, ...payload }
}

export const registerSuccess = () => {
  return { type: REGISTER_SUCCESS }
}

export const registerError = (payload: Omit<RegisterErrorAction, 'type'>) => {
  return { type: REGISTER_ERROR, ...payload }
}

