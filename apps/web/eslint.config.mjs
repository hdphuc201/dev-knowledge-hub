import { defineConfig } from "eslint/config";
import sharedConfig from "../../eslint.config.mjs";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([...sharedConfig, ...nextVitals, ...nextTypescript]);
