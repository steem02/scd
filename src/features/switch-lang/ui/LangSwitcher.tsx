import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  short?: boolean;
}

export function LangSwitcher({ short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((e) => {
      console.log(e.message);
    });
  };

  return (
    <div>
      <button onClick={toggleLang}>
        {short != null ? t('translation:lang.short') : t('translation:lang.default')}
      </button>
    </div>
  );
}
