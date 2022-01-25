import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from './actions/forgot'
import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './actions/login'
import { LOGOUT, LOGOUT_ERROR, LOGOUT_SUCCESS } from './actions/logout'
import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from './actions/register'
import { RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS } from './actions/reset'
import { AuthTypes } from './actions/types'
import { AuthStore } from './types'

let usr 

try {
  usr = window.localStorage.getItem('usr')
} catch(err) {
  usr = undefined
}

const initialState: AuthStore = {
  isAuth: !!usr,
  user: usr && JSON.parse(usr) || undefined,
  isWorking: false,
  error: '',
}

export const auth = (state = initialState, action: AuthTypes): AuthStore => {
  switch (action.type) {
    case REGISTER:
    case RESET_PASSWORD:
    case FORGOT_PASSWORD:
    case LOGOUT:
    case LOGIN:
      return {...state, isWorking: true }
    
    case LOGIN_SUCCESS:
      return {...state, isWorking: false, user: action.user, isAuth: true }
    
    case REGISTER_ERROR:
    case RESET_PASSWORD_ERROR:
    case FORGOT_PASSWORD_ERROR:
    case LOGIN_ERROR: 
      return {...state, isWorking: false, error: action.error }
    
    case LOGOUT_SUCCESS:
      return {...state, isWorking: false, isAuth: false }

    case REGISTER_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
      return {...state, isWorking: false }

    case LOGOUT_ERROR:
    default:
      return state
  }
}
