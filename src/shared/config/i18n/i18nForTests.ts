import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation', 'sidebar'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc: any, n) => {
  supportedLngs.forEach((lng: any) => {
    if (acc[lng] != null) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      // eslint-disable-next-line import/no-dynamic-require, global-require
      [n]: require(`../../../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'translation',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
