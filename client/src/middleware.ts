import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Define protected routes
  // const protectedRoutes = ["/dashboard", "/apply-proposal"];
  const protectedRoutes=[];
  const authRoutes = ["/auth/"];

  // Get the token from cookies
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  // Check if the current route is an auth route
  const isAuthRoute = authRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  // If on an auth route and already authenticated
  if (isAuthRoute && token) {
    // Redirect to role-specific dashboard if token exists
    const redirectUrl = new URL(`/dashboard/${role}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Check if the current route is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  // If on a protected route without a token
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth/signup", req.url);
    
    // Optional: Include a redirect back to the original route
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    
    return NextResponse.redirect(loginUrl);
  }

  // Allow request to proceed
  return NextResponse.next();
}

export const config = {
  // Apply middleware to protected routes and auth routes
  matcher: [
    "/dashboard/:path*", 
    "/apply-proposal/:path*", 
    "/auth/login", 
    "/auth/signup"
  ],
};