import { Locale } from "vant";
import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";
import type { langType } from "@/i18n/useLocale";

const langMap = {
  zh: zhCN,
  en: enUS,
};

export const setVantLocale = (lang: langType) => {
  Locale.use(lang, langMap[lang]);
};
