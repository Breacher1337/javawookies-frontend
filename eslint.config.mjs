import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

// ✅ Detect environment
const isProd = process.env.NODE_ENV === "production";

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",

      // 🧩 Conditional rules — strict in dev, relaxed in prod
      ...(isProd
        ? {
            "no-console": "off",
            "no-debugger": "off",
          }
        : {
            "no-console": "warn",
            "no-debugger": "error",
          }),
    },
  },
];

export default eslintConfig;
