import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { english } from './english'

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en': { translation: english },
    },
    fallbackLng: 'en',
  })
