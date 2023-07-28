import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '~/configs/i18n.config';

i18n.use(initReactI18next).init({
  cleanCode: true,
  debug: false,
  defaultNS: config.DEFAULT_NS,
  ns: config.NS,
  fallbackNS: config.DEFAULT_NS,
  fallbackLng: config.DEFAULT_LNG,
  lng: 'en',
  nsSeparator: config.NS_SEPARATOR,
  supportedLngs: config.LNGS,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  // parseMissingKeyHandler: (key) => `KEY_NOT_FOUND_${key}`,
  parseMissingKeyHandler: (key) => `${key}`,
});

export default i18n;
