import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',

    debug: true,

    resources: { en: { translationsNS: {} } },
  })
  .catch((e) => {
    console.log(e.message);
  });

export default i18n;
