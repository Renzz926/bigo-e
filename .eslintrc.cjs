module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:import/recommended",
    "./.eslintrc-auto-import.json",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    // 全局ts变量eslint无法检测到，会报错，停用此规则，检测不到ts自身会报错
    {
      files: ["*.ts", "*.vue"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/multi-word-component-names": ["off"], // 关闭组件多单词组成
    "@typescript-eslint/no-explicit-any": ["off"], // 关闭any类型的警告
    "no-useless-escape": ["off"], // 禁用不必要的转义字符
    "@typescript-eslint/ban-ts-comment": ["off"], // 禁止使用 @@ts-expect-error @ts-ignore @ts-nocheck @ts-check
    "no-unsafe-optional-chaining": ["off"], // 禁止在不允许使用“ undefined”值的情况下使用可选链接
    "@typescript-eslint/ban-types": ["off"], // 禁止xx类型作为参数类型，例如Function(大写)
    "import/no-unresolved": ["off"],
  },
};
