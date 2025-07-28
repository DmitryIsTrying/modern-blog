import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
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
        __PROJECT__: true,
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

  // Правила сортировки импортов
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Встроенные модули (fs, path)
            'external', // Внешние библиотеки (react, lodash)
            'internal', // Внутренние алиасы (@/entities)
            ['parent', 'sibling', 'index'], // Относительные пути (../, ./)
            'object', // Импорты-объекты (стили)
            'type', // Типы (TypeScript)
          ],
          'newlines-between': 'always', // Пустые строки между группами
          alphabetize: {
            order: 'asc', // Сортировка A -> Z
            caseInsensitive: true, // Без учета регистра
          },
        },
      ],
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
