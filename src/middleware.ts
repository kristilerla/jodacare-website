import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// De juridiske sidene, med eller uten /en. Den gamle siden brukte stor C.
const JURIDISK = /^(\/en)?\/jodacare(\/.*)?$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ligger her og ikke i next.config.ts: redirects() matcher uavhengig av
  // store/små bokstaver på Vercel, og ville sendt /jodacare/... til seg selv.
  // www-regelen i next.config.ts hopper over disse stiene, så jodacare.no
  // sendes til www herfra — i ett hopp også for stor C.
  const juridisk = pathname.match(JURIDISK);
  if (juridisk) {
    const riktig = `${juridisk[1] ? '/en' : ''}/jodacare${juridisk[2] ?? ''}`;
    const apex = request.headers.get('host') === 'jodacare.no';
    if (riktig !== pathname || apex) {
      const url = request.nextUrl.clone();
      if (apex) {
        url.protocol = 'https:';
        url.host = 'www.jodacare.no';
        url.port = '';
      }
      url.pathname = riktig;
      // Stor C er en gammel adresse: permanent. jodacare.no → www er
      // midlertidig, som www-regelen i next.config.ts.
      return NextResponse.redirect(url, riktig !== pathname ? 308 : 307);
    }
  }

  const requestHeaders = new Headers(request.headers);
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  requestHeaders.set('x-next-locale', isEnglish ? 'en' : 'no');
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ['/((?!api|\\.well-known|_next/static|_next/image|favicon_io|favicon|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)).*)'],
};
