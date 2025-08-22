import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langSetupOptions from "../locales";

i18n
  .use(initReactI18next)
  .init({
    ...langSetupOptions,
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
