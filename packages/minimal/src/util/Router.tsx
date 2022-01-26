
import React, { FC, useLayoutEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import { History } from 'history'

// Custom router to use with redux
export const RouterHistory: FC<{ history: History }> = ({ children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  )
}