import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/(.*)'],
};

export async function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  const maintenance = await get('maintenance');
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname === '/maintenance' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  if (maintenance) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}
