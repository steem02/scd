import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { memo } from 'react';

interface AboutPageProps {}

export default memo(function AboutPage(props: AboutPageProps) {
  const t = useTranslate();
  return (
    <Page>
      {t('title', { ns: 'about' })}
      <Counter />
    </Page>
  );
});
