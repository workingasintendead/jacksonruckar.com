import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  const isMaintenancePath = request.nextUrl.pathname.startsWith('/maintenance');
  const isProduction = process.env.NODE_ENV === 'production';

  if (
    isProduction &&
    maintenanceMode &&
    !isMaintenancePath &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
