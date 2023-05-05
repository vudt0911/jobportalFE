import i18n from "i18next";
import transEN from "@/locales/en/index.json";
import transVI from "@/locales/vi/index.json";
import { initReactI18next } from "react-i18next";
import { LanguagesType } from "@/types/language";
import { LOCALE } from "@/const";
const locale = localStorage.getItem(LOCALE);

const resources = {
  [LanguagesType.VIETNAMESE]: {
    translation: transVI,
  },
  [LanguagesType.ENGLISH]: {
    translation: transEN,
  },
};
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: locale || LanguagesType.VIETNAMESE,
    fallbackLng: LanguagesType.VIETNAMESE,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
