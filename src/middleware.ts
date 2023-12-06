import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AuthService } from '@/services/auth.service'

let clientCredentialsToken: string | undefined
let refreshTokenInterval: NodeJS.Timeout

async function authenticate() {
  try {
    const { access_token, expires_in } = await AuthService()
    clientCredentialsToken = access_token
    const revalidateTime = expires_in * 1000 - 5 * 60 * 1000 // * 5 minutes before expiry (in ms)
    if (refreshTokenInterval) {
      clearInterval(refreshTokenInterval)
    }
    refreshTokenInterval = setInterval(authenticate, revalidateTime)
  } catch (e) {
    clientCredentialsToken = undefined
  }
}

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  if (!clientCredentialsToken) {
    await authenticate()
  }
  requestHeaders.set('Authorization', `Bearer ${clientCredentialsToken}`)

  // You can set request headers in NextResponse.rewrite
  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
}
