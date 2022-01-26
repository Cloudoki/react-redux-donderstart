import React, { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from 'store/types'
import { Routing } from 'constants/global'

export const PrivateRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const { isAuth } = useSelector(({ auth }: Store) => ({isAuth: auth.isAuth }))
  return isAuth ? children : <Navigate to={Routing.LOGIN} />
}