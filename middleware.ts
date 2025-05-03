import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/(.*)'],
};

export async function middleware(req: NextRequest) {
  const maintenance = await get('maintenance');

  if (maintenance) {
    req.nextUrl.pathname = `/maintenance`;

    return NextResponse.rewrite(req.nextUrl);
  }
}
