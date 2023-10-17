import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const t = useTranslate();
  return (
    <Page>
      {t('title', { ns: 'about' })}
      <Counter />
    </Page>
  );
}
