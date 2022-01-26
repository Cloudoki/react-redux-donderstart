export const request = async (options: RequestInit & { url: string }) => {
  const { url, ...rest } = options
  const res = await fetch(url, rest)

  if (res.status === 204) return Promise.resolve()
  
  if (res.status === 401) {
    window.localStorage.removeItem('usr')
    return Promise.reject()
  }
  
  const data = await res.json()
  if (res.status < 400) {
    return Promise.resolve(data)
  }
  
  const error = (data?.errors.length && data.errors[0]) || ''
  return Promise.reject(error)
}