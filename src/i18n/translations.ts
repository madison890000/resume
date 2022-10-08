import { APP_LOCALES,locales } from './languages';

export const generatedTranslations = () => {
  const translations: any = {};
  for (const key of Object.keys(APP_LOCALES)) {
    try {
      // @ts-ignore
      translations[key] = locales[key];
    } catch {
      console.warn(`Can't find translations for ${key}`);
    }
  }
  return translations;
};
