/* eslint-disable @typescript-eslint/no-require-imports */
const globals = require("globals");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");
const pluginI18next = require("eslint-plugin-i18next");
const pluginPrettier = require("eslint-plugin-prettier");

module.exports = [
    // Базовые настройки
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                __IS_DEV__: true,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },

    // Основные правила ESLint
    js.configs.recommended,

    // Правила TypeScript
    ...tseslint.configs.recommended,

    // React правила
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react: pluginReact,
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            "react/jsx-indent": "off", // Отключаем, так как за это отвечает Prettier
            "react/jsx-indent-props": "off",
            "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
        },
    },

    // i18next правила
    {
        plugins: {
            i18next: pluginI18next,
        },
        rules: {
            "i18next/no-literal-string": ["error", { markupOnly: true }],
        },
    },

    // Prettier интеграция (должен быть последним!)
    {
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
];
