import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notifyClean } from 'store/app/actions/notify'
import { Store } from 'store/types'
import { $Notifications, $Notification, $Icon } from './styles'

export const Notifications: FC = () => {
  const dispatch = useDispatch()
  const { notifications } = useSelector(({ app }: Store) => ({ notifications: app.notifications }))

  useEffect(() => {
    if (notifications.length) {
      const timer = setTimeout(() => dispatch(notifyClean()), 2400)
      return () => clearTimeout(timer)
    }
    return
  }, [dispatch, notifications.length])

  return (
    <$Notifications>
      {notifications.map((notif, idx) => (
        <$Notification key={`notification-${idx}`} error={notif.type === 'error'}>
          <$Icon name={notif.type === 'error' ? 'alert-circle' : 'send'} />
          {notif.value}
        </$Notification>
      ))}
    </$Notifications>
  )
}
