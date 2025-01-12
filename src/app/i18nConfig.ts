interface I18nConfig {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
}

const i18nConfig: I18nConfig = {
  locales: ["en", "ar", "hi"],
  defaultLocale: "en",
  prefixDefault: false,
};

export default i18nConfig;
