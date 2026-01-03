import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsonc from "eslint-plugin-jsonc";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist", "**/*.css"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { ...pluginReact.configs.flat.recommended },
    settings: { react: { version: "detect" } },
    rules: { "react/react-in-jsx-scope": "off" },
  },
  {
    ignores: ["package-lock.json"],
    files: ["**/*.json", "tsconfig*.json"],
    plugins: { jsonc },
    extends: [
      ...jsonc.configs["flat/recommended-with-jsonc"],
      ...jsonc.configs["flat/prettier"],
    ],
  },
]);
