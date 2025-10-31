import { Locale } from "vant";
import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";
import zhTW from "vant/es/locale/lang/zh-TW";
import idID from "vant/es/locale/lang/id-ID";
import msMY from "vant/es/locale/lang/en-US";
import thTH from "vant/es/locale/lang/th-TH";
import viVN from "vant/es/locale/lang/vi-VN";
import ptBR from "vant/es/locale/lang/pt-BR";
import type { langType } from "@/i18n/useLocale";

const langMap: Record<string, any> = {
  zh: zhCN,
  "zh-cn": zhCN,
  "zh-tw": zhTW,
  en: enUS,
  "en-my": msMY,
  "in-id": idID,
  th: thTH,
  vi: viVN,
  "pt-br": ptBR,
};

export const setVantLocale = (lang: langType) => {
  const pack = langMap[lang] || enUS;
  Locale.use(lang, pack);
};
