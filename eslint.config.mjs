import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // Базовые игноры
  { ignores: ['node_modules/', 'build/'] },

  // Основные настройки для всех файлов
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __IS_DEV__: true,
        __API_URL__: true,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Базовые правила ESLint
  js.configs.recommended,

  // Правила TypeScript
  ...tseslint.configs.recommended,

  // React правила
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
    },
  },

  // Prettier конфиг (должен быть перед плагином)
  prettierConfig,

  // Prettier плагин (должен быть последним)
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
