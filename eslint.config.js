import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly", // console を読み取り専用として定義
        process: "readonly", // process を読み取り専用として定義
      },
    },
    rules: {
      "no-undef": "off", // 未定義エラーを無効化
      "no-console": "off", // console 使用を許可
      "no-unused-vars": "warn", // 未使用変数警告
    },
  },
];
