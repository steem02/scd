import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';

interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const t = useTranslate();
  return (
    <Page>
      {t('title', { ns: 'about' })}
      <button>jhdfh</button>
    </Page>
  );
}
