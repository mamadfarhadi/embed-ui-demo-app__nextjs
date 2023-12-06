import { NextRequest, NextResponse } from 'next/server'
import config from '@/config/index.json'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
  const Authorization = headers().get('Authorization')

  const { products } = config
  const searchParams = request.nextUrl.searchParams
  const gtin = searchParams.get('gtin')

  const res = await fetch(
    `${products.stagingBaseUrl}/products/by-gtin/${gtin}`,
    {
      headers: {
        Authorization: Authorization || '',
      },
      cache: 'no-cache',
    },
  )
  const data = await res.json()
  return NextResponse.json(data)
}
