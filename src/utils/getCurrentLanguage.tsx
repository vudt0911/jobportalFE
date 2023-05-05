import { LANGUAGES, LOCALE } from "@/const";
import { Languages } from "@/types/language";

export const getCurrentLanguage = (): Languages => {
  const currentLang = localStorage.getItem(LOCALE);
  if (
    !currentLang ||
    !LANGUAGES.some((lang: Languages) => lang === currentLang)
  )
    return "vi";
  return currentLang as Languages;
};
