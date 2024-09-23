import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations (add your own translation JSON files)
import en from './locales/en.json';
import my from './locales/my.json';

// i18n configuration
i18n
  .use(initReactI18next)  // Pass i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: en,  // English translations
      },
      my: {
        translation: my,  // Myanmar translations
      },
    },
    lng: 'en',  // Default language
    fallbackLng: 'en',  // Fallback language
    interpolation: {
      escapeValue: false,  // React already escapes by default
    },
  });

export default i18n;
