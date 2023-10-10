import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  short?: boolean;
}

export function LangSwitcher({ short = false }: LangSwitcherProps) {
  const { t, i18n } = useTranslation('translation');

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((e) => {
      console.log(e.message);
    });
  };

  return (
    <div>
      <button onClick={toggleLang}>{short ? t('lang.short') : t('lang.default')}</button>
    </div>
  );
}
