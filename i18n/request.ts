import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (
    !locale ||
    !routing.locales.includes(locale as "en" | "ja" | "zh" | "fr" | "vi")
  ) {
    locale = "en"; // fallback to default
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
