import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import en from "../i18n/en/translation.json"
import ur from "../i18n/ur/translation.json"
import removeSpecialCharactersWithUnderscore from "../utils.js"

const resources = {
  en: { translation: en },
  ur: { translation: ur }
}

const configureI18n = () =>
  i18n
    // passes i18n down to react-i18next
    .use(initReactI18next)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      // detection: { order: ["navigator"] },
      resources,
      fallbackLng: "ur",
      updateMissing: true,
      saveMissing: true,
      interpolation: {
        escapeValue: false // not needed for react as it escapes by default
      },
      missingKeyHandler(lng, ns, key, fallbackValue) {
        console.log(
          lng,
          ns,
          `"${removeSpecialCharactersWithUnderscore(key)}": "${fallbackValue}"`
        )
      }
    })

export const changeLanguage = code => {
  if (!code) {
    i18n.changeLanguage(navigator ? navigator.language : "en")
    return
  }
  i18n.changeLanguage(code)
}

// Get the code for the current language / locale
export const getCurrentLanguageCode = () => {
  let locale = "en"
  if (i18n.languages) {
    locale =
      i18n.languages.find(lang => Object.keys(resources).indexOf(lang) > -1) ||
      locale
  }
  return locale
}

export function languageIsRTL() {
  return (
    navigator && (navigator.language === "ar" || navigator.language === "ur")
  )
}

export default configureI18n
