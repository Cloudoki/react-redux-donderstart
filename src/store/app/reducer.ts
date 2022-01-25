import { NOTIFY, NOTIFY_CLEAN } from './actions/notify'
import { TOGGLE_THEME } from './actions/toggleTheme'
import { AppTypes } from './actions/types'
import { AppStore } from './types'

const initialState: AppStore = {
  theme: window.localStorage.getItem('theme') as 'dark' | 'light' || 'dark',
  notifications: [],
}

export const app = (state = initialState, action: AppTypes): AppStore => {
  switch (action.type) {
    case TOGGLE_THEME:  {
      const theme = state.theme === 'dark' ? 'light' : 'dark'
      return { ...state, theme }
    }

    case NOTIFY: {
      const { payload } = action
      const newNotifications = state.notifications.slice()
      newNotifications.push({
        type: payload.type,
        value: payload.value,
      })
      return {...state, notifications: newNotifications}
    }

    case NOTIFY_CLEAN: {
      return {...state, notifications: []}
    }

    default:
      return state
  }
}
