import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnyAction, Dispatch } from 'redux'
import { PrivateRoute } from './PrivateRoute'
import { History } from 'history'
import { Routing } from 'constants/global'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/NotFound'
import { LOGIN_SUCCESS } from 'store/auth/actions/login'
import { LOGOUT_SUCCESS } from 'store/auth/actions/logout'
import { FORGOT_PASSWORD_SUCCESS } from 'store/auth/actions/forgot'
import { RESET_PASSWORD_SUCCESS } from 'store/auth/actions/reset'
import { REGISTER_SUCCESS } from 'store/auth/actions/register'
import { Projects } from 'pages/Projects'


export const routes = () => (
  <Routes>
    <Route path='/' element={
      <PrivateRoute>
        <Projects /> 
      </PrivateRoute>
    }/>
    {[Routing.LOGIN, Routing.REGISTER, Routing.FORGOT_PASSWORD, Routing.RESET_PASSWORD].map((route, idx) => (
      <Route key={`login-route-${idx}`} path={route} element={
        <Login />
      }/>
    ))}
    <Route element={NotFound} />
  </Routes>
)

export const createRouteMiddleware = (history: History) => () => (next: Dispatch) => (action: AnyAction) => {
  next(action)

  switch (action.type) {
    case LOGIN_SUCCESS:
      history.push('/')
      break

    case REGISTER_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
    case LOGOUT_SUCCESS:
      history.push(Routing.LOGIN)
      break

    default: {
      break
    }
  }
}