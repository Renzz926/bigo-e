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

// 配置i18n
const i18n = createI18n({
  legacy: false, // 设置false来使用CompositionAPI
  locale: "zh",
  messages,
});
setVantLocale("zh");

export const languageList = Object.keys(messages);

export default i18n;
