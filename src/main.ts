// eslint-disable-next-line import/named
import { createApp } from "vue";
import "normalize.css/normalize.css"; // 引入normalize.css 重置样式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "@/assets/styles/index.scss"; // 引入全局scss
import App from "./App.vue";
import router from "@/router";
import pinia from "@/store";
import "virtual:svg-icons-register";
import "@/plugins/flexible";
import "@/plugins/http/axios/fingerPrint";
// import i18n from "@/i18n";
import { Lazyload } from "vant";
import { injectVant } from "./plugins/vantComponent";

const app = createApp(App);

injectVant(app);
app.config.globalProperties.$audio = null;

app
  .use(router)
  .use(pinia)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .mount("#app");
