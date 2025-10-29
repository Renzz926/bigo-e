import modal from './modal';
import tab from './tab';
import cache from './cache';
import auth from './auth';
// 预设动画
import animate from '@/animate';

import { App } from 'vue';

export default function installPlugin(app: App) {
  // 页签操作
  app.config.globalProperties.$tab = tab;

  // 模态框对象
  app.config.globalProperties.$modal = modal;

  // 缓存对象
  app.config.globalProperties.$cache = cache;

  // 下载文件

  // 认证对象
  app.config.globalProperties.$auth = auth;

  app.config.globalProperties.animate = animate;
}
