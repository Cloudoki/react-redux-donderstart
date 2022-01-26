import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RouterHistory } from 'util/Router'
import { store } from 'store'
import { App } from 'App'
import { history } from 'store'

ReactDOM.render(
  <Provider store={store}>
    <RouterHistory history={history}>
      <App />
    </RouterHistory>
  </Provider>,
  document.getElementById('root'))
