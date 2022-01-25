import { combineReducers } from 'redux'
import { auth } from 'store/auth/reducer'
import { app } from 'store/app/reducer'

export const reducers = combineReducers({
  auth,
  app,
})
