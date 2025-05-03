import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/(.*)'],
};

export async function middleware(request: NextRequest) {
  const maintenance = await get<{ enabled: boolean }>('maintenance');
  const isMaintenancePath = request.nextUrl.pathname.startsWith('/maintenance');

  if (
    maintenance?.enabled &&
    !isMaintenancePath &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}
