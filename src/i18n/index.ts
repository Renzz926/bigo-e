import { createI18n } from "vue-i18n";
import { setVantLocale } from "./vantLocale";

// 获取链接中的文件名称（语言字段）
const getFileName = (str: string): string => {
  const arr = str.split("/");
  const fileItem = arr.pop() as string;
  const fileNameArr = fileItem.split(".");
  return fileNameArr[0];
};

// 获取locales文件夹下的所有文件
const localeModules = import.meta.glob("./locales/*.ts", { eager: true });

// 遍历文件生成messages内容
export const messages = Object.entries(localeModules).reduce((prev: any, item: any) => {
  const key: string = getFileName(item[0]);
  prev[key] = item[1].default;
  return prev;
}, {});

// 计算初始语言：优先 localStorage，其次浏览器，最后回退到 zh-cn
const getInitialLocale = (): string => {
  const stored = localStorage.getItem("language");
  if (stored && messages[stored]) return stored;
  const nav = window.navigator;
  const browser = (nav.language || (nav as any).userLanguage || "").toLowerCase();
  // 映射浏览器语言到我们支持的语言键
  if (browser.startsWith("zh-tw") || browser === "zh-hk") return messages["zh-tw"] ? "zh-tw" : "zh-cn";
  if (browser.startsWith("zh")) return messages["zh-cn"] ? "zh-cn" : messages["zh"] ? "zh" : "en";
  if (browser.startsWith("ms")) return messages["en-my"] ? "en-my" : "en";
  if (browser.startsWith("id")) return messages["in-id"] ? "in-id" : "en";
  if (browser.startsWith("vi")) return messages["vi"] ? "vi" : "en";
  if (browser.startsWith("th")) return messages["th"] ? "th" : "en";
  if (browser.startsWith("pt")) return messages["pt-br"] ? "pt-br" : "en";
  if (browser.startsWith("en")) return messages["en"] ? "en" : "zh-cn";
  return messages["zh-cn"] ? "zh-cn" : Object.keys(messages)[0] || "en";
};

const initialLocale = getInitialLocale();

// 配置i18n
const i18n = createI18n({
  legacy: false, // 设置false来使用CompositionAPI
  locale: initialLocale,
  messages,
});
setVantLocale(initialLocale as any);

export const languageList = Object.keys(messages);

export default i18n;
