import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../../public/i18n/en/translation.json";
import ur from "../../public/i18n/ur/translation.json";
import { removeSpecialCharactersWithUnderscore } from "../utils";

const resources = {
  en: { translation: en },
  ur: { translation: ur },
};

const configureI18n = () =>
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: "en",
      saveMissing: true,
      updateMissing: true,
      saveMissingTo: "current",
      missingKeyHandler(lng, ns, key, fallbackValue) {
        console.log(lng, ns, `"${removeSpecialCharactersWithUnderscore(key)}": "${fallbackValue}"`);
        return key;
      },
    });

export const changeLanguage = (code) => {
  if (!code) {
    i18n.changeLanguage(navigator ? navigator.language : "en");
    return;
  }
  i18n.changeLanguage(code);
};

// Get the code for the current language / locale
export const getCurrentLanguageCode = () => {
  let locale = "en";
  if (i18n.languages) {
    locale = i18n.languages.find((lang) => Object.keys(resources).indexOf(lang) > -1) || locale;
  }
  return locale;
};

export function languageIsRTL() {
  if (typeof window !== "undefined") {
    const { navigator } = window;
    return navigator && (navigator.language === "ar" || navigator.language === "ur");
  }
}

export default configureI18n;
