import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // 直接使用 next-intl 中間件，不進行額外的重定向處理
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - API routes, static files, images or files in the public folder
  // - _next internal paths
  matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
};
