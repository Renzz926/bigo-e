import { viteMockServe } from "vite-plugin-mock";

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/, // 自动读取模拟.ts 文件时，请忽略指定格式的文件
    mockPath: "mock", // 自动读取模拟.ts 文件时，请忽略指定格式的文件
    localEnabled: !isBuild, // 是否启用 mock 功能
    prodEnabled: false,
  });
}
