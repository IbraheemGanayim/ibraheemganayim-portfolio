import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:;"
  );
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );

  return response;
}

export const config = {
  matcher: "/:path*",
};
