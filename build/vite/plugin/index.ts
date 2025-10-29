import type { PluginOption } from "vite";

import { configLegacyPlugin } from "./legacy";
import { configHtmlPlugin } from "./html";
import { configSvgSpritePlugin } from "./svgSprite";
import { configBaiduAnalysticPlugin } from "./baiduAnalystic";
import { configMockPlugin } from "./mock";
import { configVisualizerPlugin } from "./visualizer";
import { configCompressPlugin } from "./compress";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_BAIDU, VITE_USE_MOCK, VITE_ANALYSIS, VITE_COMPRESS } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgSpritePlugin(isBuild));

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  // The following plugins only work in the production environment
  if (isBuild) {
    // compatible with older browsers
    VITE_LEGACY && vitePlugins.push(configLegacyPlugin());

    // baidu analystic
    VITE_BAIDU && vitePlugins.push(configBaiduAnalysticPlugin(""));

    // build bundle analysis
    VITE_ANALYSIS && vitePlugins.push(configVisualizerPlugin());

    // gzip
    VITE_COMPRESS && vitePlugins.push(configCompressPlugin("brotli", false));
  }
  return vitePlugins;
}
