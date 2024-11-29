import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.DS_Store",
        "**/.AppleDouble",
        "**/.LSOverride",
        "**/logs",
        "**/*.log",
        "**/npm-debug.log*",
        "**/yarn-debug.log*",
        "**/yarn-error.log*",
        "**/lerna-debug.log*",
        "**/.pnpm-debug.log*",
        "**/report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",
        "**/pids",
        "**/*.pid",
        "**/*.seed",
        "**/*.pid.lock",
        "**/lib-cov",
        "**/coverage",
        "**/*.lcov",
        "**/.nyc_output",
        "**/node_modules/",
        "**/*.tsbuildinfo",
        "**/.npm",
        "**/.eslintcache",
        "**/.stylelintcache",
        "**/*.tgz",
        "**/.yarn-integrity",
        "**/.env",
        "**/.env.development.local",
        "**/.env.test.local",
        "**/.env.production.local",
        "**/.env.local",
        "**/dist/",
    ],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        quotes: ["error", "double"],
    },
}];


/**
 *
 * export default [
 *     js.configs.recommended,
 *
 *     {
 *         rules: {
 *             "no-unused-vars": "warn",
 *             "no-undef": "warn"
 *         }
 *     }
 * ];
 */