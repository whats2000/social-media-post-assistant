import Common from '@/i18n/locales/en/Common.json';

// Merge all module translations to create the complete Messages type
type Messages = typeof Common;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
