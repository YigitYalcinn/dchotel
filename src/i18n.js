import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationDE from "./locales/de/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n
  .use(LanguageDetector) // kullanıcının tarayıcı dilini algılar
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      tr: { translation: translationTR },
      de: { translation: translationDE },
      ru: { translation: translationRU }
    },
    fallbackLng: "tr", // varsayılan dil
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
