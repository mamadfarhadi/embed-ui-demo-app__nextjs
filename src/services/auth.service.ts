export const AuthService = async (): Promise<IAuthResponse> => {
  const res = await fetch('http://localhost:5173/api/auth', {
    method: 'POST',
    cache: 'no-cache',
  })
  return await res.json()
}
