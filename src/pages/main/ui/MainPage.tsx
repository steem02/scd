import { useTranslate } from "@/shared/hooks/useTranslate";

interface MainPageProps {

}

export default function MainPage(props: MainPageProps) {
  const t = useTranslate("main");
  return <div>
    { t("title") }
  </div>;
}