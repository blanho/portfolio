import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ja", "zh", "fr", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid
  const validLocale =
    locale && locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
