import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const isAuth = cookieStore.has('token')

  if (isAuth) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/',
}