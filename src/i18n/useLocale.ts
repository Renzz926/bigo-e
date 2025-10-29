// 将i18n封装成hook
import { useI18n } from "vue-i18n";
import { languageList } from "./index";
import { setVantLocale } from "./vantLocale";

export type langType = "zh" | "en";

export default function useLocale(): any {
  const i18n = useI18n();

  // 获取当前语言
  const currentLocale = computed(() => {
    return i18n.locale.value;
  });

  // 切换语言
  const changeLocale = (value?: langType) => {
    if (value) {
      // 根据传入值设置语言
      if (languageList.includes(value)) {
        i18n.locale.value = value;
        localStorage.setItem("language", value);
        setVantLocale(value);
      } else {
        console.error("changeLocale函数只能接受 " + languageList.join("、") + " 作为语言值");
      }
    } else {
      let language = localStorage.getItem("language") || "";
      if (language && languageList.find((item) => item === language)) {
        // 根据localstorage中的language设置语言
        i18n.locale.value = language;
      } else {
        // 浏览器设置默认语言
        let browserLang = window.navigator.language || window.navigator.userLanguage;
        if (browserLang) {
          browserLang = browserLang.substring(0, 2);
          language = browserLang === "zh" ? "zh" : "en";
          i18n.locale.value = language;
        }
      }
      localStorage.setItem("language", language);
      setVantLocale(language as langType);
    }
  };

  const t = i18n.t;

  return {
    i18n,
    currentLocale,
    changeLocale,
    t,
  };
}
