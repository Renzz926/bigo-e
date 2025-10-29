// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法解析自动注册组件，导致 @vant/auto-import-resolver 无法解析样式，因此需要手动引入样式。

// eslint-disable-next-line import/named
import { App } from "vue";
import {
  showToast,
  showDialog,
  showNotify,
  showImagePreview,
  showLoadingToast,
  closeToast,
  showConfirmDialog,
} from "vant";

import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";

// LoadingToast
const showLoading = () => {
  showLoadingToast({
    forbidClick: true,
    duration: 0,
  });
};

// 全局注册vant函数式组件
export const injectVant = (instance: App<Element>) => {
  instance = instance || getCurrentInstance();
  instance.config.globalProperties.$showToast = showToast;
  instance.config.globalProperties.$showDialog = showDialog;
  instance.config.globalProperties.$showNotify = showNotify;
  instance.config.globalProperties.$showLoading = showLoading;
  instance.config.globalProperties.$showConfirmDialog = showConfirmDialog;
  instance.config.globalProperties.$closeToast = closeToast;
  instance.config.globalProperties.$showImagePreview = showImagePreview;
};
