import { NextResponse } from 'next/server'
import config from '@/config/index.json'

export async function POST() {
  const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = process.env
  const { auth } = config
  const payload = {
    grant_type: 'client_credentials',
    scope: 'embed',
    client_id: VITE_CLIENT_ID || '',
    client_secret: VITE_CLIENT_SECRET || '',
  }
  const res = await fetch(`${auth.stagingBaseUrl}/identity/connect/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(payload),
    cache: 'no-cache',
  })
  const data = await res.json()
  return NextResponse.json(data)
}
