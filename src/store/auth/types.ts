export type AuthStore = {
  isAuth: boolean,
  user?: User,
  isWorking: boolean,
  error: unknown,
}

export type User = {
  id: string,
  name: string,
  email: string,
}