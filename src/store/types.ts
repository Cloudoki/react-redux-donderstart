import { AuthStore } from 'store/auth/types'
import { AppStore } from 'store/app/types'

export interface Store {
  auth: AuthStore,
  app: AppStore,
}
