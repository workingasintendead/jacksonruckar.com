import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|maintenance|.*\\..*).*)'],
};

interface MaintenanceConfig {
  enabled: boolean;
}

export async function middleware(req: NextRequest) {
  if (
    process.env.VERCEL_ENV === 'preview' ||
    process.env.NODE_ENV === 'development'
  ) {
    return NextResponse.next();
  }

  const maintenance = await get<MaintenanceConfig>('maintenance');

  if (maintenance?.enabled) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}
