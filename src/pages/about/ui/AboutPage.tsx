import { useTranslate } from "@/shared/hooks/useTranslate";

interface AboutPageProps {

}

export default function AboutPage(props: AboutPageProps) {
  const t = useTranslate();
  return <div>{ t("title", { ns: "about" }) }fjj
    <button>jhdfh</button>
  </div>;
}