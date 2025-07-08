import { TRANSLATION_MODULES } from '@/i18n/constants';

/**
 * Loads and merges translation files from separate module files
 * @param locale The current locale
 * @param modules Array of module names to load translations for
 * @returns Merged translation object
 */
export async function loadAndMergeTranslations(
  locale: string,
  modules: string[] = TRANSLATION_MODULES,
) {
  try {
    // Load all specified modules
    const translationModules = await Promise.all(
      modules.map(async (module) => {
        try {
          return (
            (await import(`@/i18n/locales/${locale}/${module}.json`)).default || {}
          );
        } catch {
          console.warn(
            `Translation module '${module}' not found for locale '${locale}'`,
          );
          return {};
        }
      }),
    );

    // Merge all translation objects
    return translationModules.reduce((acc, moduleTranslations) => {
      return { ...acc, ...moduleTranslations };
    }, {});
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    throw error;
  }
}
