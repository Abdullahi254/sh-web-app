import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    request.cookies.delete('apiToken')
    request.cookies.delete('userId')
    console.log("deleted previous cookies")
}

export const config = {
    matcher: '/login/:path*',
  }