//TODO: remove this
//@ts-nocheck
import { request } from 'util/request'
import { takeLatest, put, call, StrictEffect } from 'redux-saga/effects'
import { API_URL } from 'constants/global'
import { ForgotPasswordAction, LoginAction, RegisterAction, ResetPasswordAction } from './actions/types'
import { LOGIN, loginError, loginSuccess } from './actions/login'
import { User } from './types'
import { LOGOUT, logoutError, logoutSuccess } from './actions/logout'
import { forgotPasswordError, forgotPasswordSuccess, FORGOT_PASSWORD } from './actions/forgot'
import { resetPasswordError, resetPasswordSuccess, RESET_PASSWORD } from './actions/reset'
import { REGISTER, registerError, registerSuccess } from './actions/register'
import { notify } from 'store/app/actions/notify'

function* login({ email, password }: LoginAction): Generator<StrictEffect, void, { data: User }> {
  try {
    // TODO: Replace me with correct api call
    // const { data } = yield call(request, {
    //   url: `${API_URL}/auth/login`,
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify({email, password}),
    // })

    const user = {
      id: 'randomID',
      email,
      name: 'John',
    }

    yield put(loginSuccess({ user }))
  } catch (error) {
    yield put(loginError({error}))
    yield put (notify({ payload: { type : 'error', value: 'Wrong email/password.' }}))
  }
}

function* logout(): Generator<StrictEffect, void, { data: User }> {
  try {
    // TODO: Replace me with correct api call
    // yield call(request, {
    //   url: `${API_URL}/auth/logout`,
    //   method: 'POST',
    //   credentials: 'include',
    // })

    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutError({error}))
    yield put (notify({ payload: { type : 'error', value: 'ups something went wrong...' }}))
  }
}

function* forgot({ email }: ForgotPasswordAction): Generator<StrictEffect, void> {
  try {
    // TODO: Replace me with correct api call
    // yield call(request, {
    //   url: `${API_URL}/auth/forgot`,
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify({ email }),
    // })

    yield put(forgotPasswordSuccess())
  } catch (error) {
    yield put(forgotPasswordError({error}))
    yield put (notify({ payload: { type : 'error', value: 'ups something went wrong...' }}))
  }
}

function* reset({ password, token }: ResetPasswordAction): Generator<StrictEffect, void> {
  try {
    // TODO: Replace me with correct api call
    // yield call(request, {
    //   url: `${API_URL}/auth/reset`,
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify({ password, token }),
    // })

    yield put(resetPasswordSuccess())
  } catch (error) {
    yield put(resetPasswordError({error}))
    yield put (notify({ payload: { type : 'error', value: 'ups something went wrong...' }}))
  }
}

function* register({ password, token }: RegisterAction): Generator<StrictEffect, void> {
  try {
    // TODO: Replace me with correct api call
    // yield call(request, {
    //   url: `${API_URL}/users/accept`,
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify({ password, token }),
    // })

    yield put(registerSuccess())
  } catch (error) {
    yield put(registerError({error}))
    yield put (notify({ payload: { type : 'error', value: 'ups something went wrong...' }}))
  }
}

export const auth = function* rootSaga() {
  yield takeLatest(LOGIN, login)
  yield takeLatest(LOGOUT, logout)
  yield takeLatest(FORGOT_PASSWORD, forgot)
  yield takeLatest(RESET_PASSWORD, reset)
  yield takeLatest(REGISTER, register)
}
