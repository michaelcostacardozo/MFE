import { LocalesType } from "./types";

export const locales = {
  en: {
    common: require("./en/common.json"),
  },
};

export const getLocales = (
  locale: string = "en",
  namespace: string
): LocalesType => locales?.[locale]?.[namespace] || {};
