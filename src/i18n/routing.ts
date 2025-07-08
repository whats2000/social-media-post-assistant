import { defineRouting } from 'next-intl/routing';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGE } from '@/i18n/constants';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LANGUAGE,

  // Used when no locale matches
  defaultLocale: DEFAULT_LANGUAGE,
});
