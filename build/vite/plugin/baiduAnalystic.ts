/*
 * @Description: 百度统计插件
 * @Params: id 百度统计插入代码的id
 */
import type { Plugin } from "vite";

export function configBaiduAnalysticPlugin(id: string): Plugin {
  return {
    // 插件名称
    name: "vite-plugin-baidu-analystic",
    // 插件生效模式：开发（serve）和构建（build）
    apply: "build",
    // 转换index.html
    transformIndexHtml() {
      return [
        {
          tag: "script",
          attrs: { src: `https://hm.baidu.com/hm.js?${id}` },
          injectTo: "head-prepend",
        },
      ];
    },
  };
}
