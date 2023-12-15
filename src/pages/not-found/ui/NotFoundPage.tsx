import { Page } from '@/widgets/Page';
import { useTranslate } from '@/shared/hooks/useTranslate';
import s from './NotFoundPage.module.scss';
import { memo } from 'react';

export const NotFoundPage = memo(function NotFoundPage() {
  const t = useTranslate('not_found');
  return (
    <Page className={s.notFound}>
      <h1>{t('title')}</h1>
    </Page>
  );
});
