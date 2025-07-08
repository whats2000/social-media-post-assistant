import { SupportedLanguage } from '@/i18n/types';

export const SUPPORTED_LANGUAGE: SupportedLanguage[] = ['en', 'zh-TW'];

export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGE_OPTIONS: { code: SupportedLanguage; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' },
];

export const TRANSLATION_MODULES = ['Common'];
