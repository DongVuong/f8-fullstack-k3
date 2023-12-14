import { NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n";
import { cookies } from "next/headers";
import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix";
function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = cookies();
  const checkCookie = cookieStore.get(process.env.CLIENT_COOKIE);
  // console.log(checkCookie);
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (pathname.startsWith("/vi/profile") && !checkCookie) {
    return Response.redirect(`${process.env.NEXTAUTH_URL}/vi/login`);
  }
  if (pathname.startsWith("/vi/login") && checkCookie) {
    return Response.redirect(`${process.env.NEXTAUTH_URL}/vi/profile`);
  }
  if (pathname.startsWith("/en/profile") && !checkCookie) {
    return Response.redirect(`${process.env.NEXTAUTH_URL}/en/login`);
  }
  if (pathname.startsWith("/en/login") && checkCookie) {
    return Response.redirect(`${process.env.NEXTAUTH_URL}/en/profile`);
  }

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const urlLogin = new URL(`/${locale}/login`, request.url);
    const urlProfile = new URL(`/${locale}/profile`, request.url);
    // if (!checkCookie) {
    //   return Response.redirect(urlLogin);
    // }
    if (pathname.startsWith("/profile") && !checkCookie) {
      return Response.redirect(urlLogin);
    }
    if (pathname.startsWith("/login") && checkCookie) {
      return Response.redirect(urlProfile);
    }
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
