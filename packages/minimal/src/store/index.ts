import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './combinedReducers'
import { sagas } from './combinedSagas'
import { createRouteMiddleware } from 'App/routes'
import { authMiddleware } from 'store/auth/middleware'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const routingMiddleware = createRouteMiddleware(history)

const middlewares = [sagaMiddleware, authMiddleware, routingMiddleware]

let composedMiddleware

if (process.env.NODE_ENV === 'development') {
  composedMiddleware = composeWithDevTools(applyMiddleware(...middlewares, logger))
} else {
  composedMiddleware = applyMiddleware(...middlewares)
}

export const store = createStore(reducers, composedMiddleware)

sagas.forEach((saga) => {
  sagaMiddleware.run(saga)
})

