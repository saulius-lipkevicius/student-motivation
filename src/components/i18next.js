import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { reactI18nextModule } from "react-i18next";

const Languages = ['en', 'lt'];

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en", // use en if detected lng is not available
    whiteList: Languages,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    // react-i18next options
    react: {
      wait: true
    }
  });

export default i18n;