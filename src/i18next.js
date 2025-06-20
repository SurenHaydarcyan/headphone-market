import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";


import am from "./locales/am/translation.json";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  .use(Backend) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hy: { translation: am },
      ru: { translation: ru },
    },
    lng: "ru",
    fallbackLng: "ru",
    debug: true,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
 
  });

export default i18n;
