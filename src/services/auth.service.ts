import API from '@/config/API'

const { VITE_AUTH_BASE_URL, VITE_CLIENT_ID, VITE_CLIENT_SECRET } = process.env

let clientCredentialsToken: string | undefined
let refreshTokenInterval: NodeJS.Timeout

async function authenticate() {
  try {
    const payload = {
      grant_type: 'client_credentials',
      scope: 'embed',
      client_id: VITE_CLIENT_ID || '',
      client_secret: VITE_CLIENT_SECRET || '',
    }
    const {
      data: { access_token, expires_in },
    } = await API.post<IAuthResponse>(
      `${VITE_AUTH_BASE_URL}/connect/token`,
      new URLSearchParams(payload),
    )
    clientCredentialsToken = access_token
    // API.headers['Authorization'] = `Bearer ${clientCredentialsToken}`
    const revalidateTime = expires_in * 1000 - 5 * 60 * 1000 // * 5 minutes before expiry (in ms)
    if (refreshTokenInterval) {
      clearInterval(refreshTokenInterval)
    }
    refreshTokenInterval = setInterval(authenticate, revalidateTime)
  } catch (e) {
    console.error(e)
    clientCredentialsToken = undefined
  }
}

export const AuthService = async () => {
  if (!clientCredentialsToken) {
    await authenticate()
    console.log(clientCredentialsToken)
  }
  return clientCredentialsToken
}
