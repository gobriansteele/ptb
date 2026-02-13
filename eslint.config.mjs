import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Catch unused variables (allow _ prefix for intentional ignores)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Prefer const over let when variable is never reassigned
      "prefer-const": "error",

      // No console.log left behind (warn so it doesn't block dev, but visible)
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Enforce === over ==
      eqeqeq: ["error", "always"],

      // No unnecessary curly braces in JSX
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],

      // Hooks rules (already in next config, but being explicit)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);

export default eslintConfig;
