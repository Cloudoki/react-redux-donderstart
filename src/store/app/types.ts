export type AppStore = {
  theme: 'dark' | 'light',
  notifications: Notification[],
}

export type Notification = {
  type: 'error' | 'success' | 'warning',
  value: string,
}