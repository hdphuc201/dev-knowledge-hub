import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "**/dist/**",
    "**/coverage/**",
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/.turbo/**",
    "**/*.tsbuildinfo",
    "**/src/generated/**",
    "**/tmp/**",
    "**/temp/**",
    "**/next-env.d.ts",
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
]);
