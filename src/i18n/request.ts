import { getRequestConfig } from 'next-intl/server';

import { TRANSLATION_MODULES } from "@/i18n/constants";
import { routing } from "@/i18n/routing";
import { loadAndMergeTranslations } from "@/i18n/utils";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the [locale] segment
  let locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Define modules to load - these correspond to the JSON files in the locale directory
  const messages = await loadAndMergeTranslations(locale, TRANSLATION_MODULES);

  return {
    locale,
    messages,
  };
});
