/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

jest.mock('i18next', () => ({
  // Мокируем основные функции i18next
  use: jest.fn().mockReturnThis(), // Цепочка вызовов .use().use()...
  init: jest.fn(() => Promise.resolve()),
  changeLanguage: jest.fn(() => Promise.resolve()),
  t: (key: string) => key,
  language: 'en',
  isInitialized: true,

  Backend: jest.fn(),
  LanguageDetector: jest.fn(),
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(() => Promise.resolve()),
      language: 'en',
    },
    ready: true,
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
  withTranslation: () => (Component: any) => Component,
}))
