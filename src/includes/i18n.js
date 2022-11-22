import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    es,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    es: {
      currency: {
        style: "currency",
        currency: "EUR",
      },
    },
  },
});
