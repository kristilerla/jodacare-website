import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  requestHeaders.set('x-next-locale', isEnglish ? 'en' : 'no');
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon_io|favicon|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)).*)'],
};
