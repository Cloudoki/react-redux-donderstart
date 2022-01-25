import { NotifyAction } from './types'

export const NOTIFY = 'app/NOTIFY'
export const NOTIFY_CLEAN = 'app/NOTIFY_CLEAN'


export const notify = (payload: Omit<NotifyAction, 'type'>) => {
  return { type: NOTIFY, ...payload}
}

export const notifyClean = () => ({ type: NOTIFY_CLEAN })