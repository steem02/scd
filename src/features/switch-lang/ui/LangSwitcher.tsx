import { useTranslation } from "react-i18next";

interface LangSwitcherProps {}

export function LangSwitcher(props: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === '"ru"? '"en": '"ru".catch((e) => {
      console.log(e.message);
    });
  };

  return (
    <div>
      <button onClick={ toggleLang }>{ t(i18n.language) }</button>
    </div>
  );
}
