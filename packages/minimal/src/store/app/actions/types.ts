import { Notification } from '../types'
import { NOTIFY, NOTIFY_CLEAN } from './notify'
import { TOGGLE_THEME } from './toggleTheme'

export type AppTypes = ToggleThemeAction | NotifyAction | NotifyCleanAction

export type ToggleThemeAction = {
  type: typeof TOGGLE_THEME,
}

export type NotifyAction = {
  type: typeof NOTIFY,
  payload: Notification,
}

export type NotifyCleanAction = {
  type: typeof NOTIFY_CLEAN,
}