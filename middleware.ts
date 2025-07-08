import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ja", "zh", "fr", "vi"],

  // Used when no locale matches
  defaultLocale: "en",

  // The prefix for the default locale
  localePrefix: "always"
});

export const config = {
  // Match only internationalized pathnames, exclude API routes
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"]
};
