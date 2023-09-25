import { Page } from '@/widgets/Page';
import { useTranslate } from '@/shared/hooks/useTranslate';
import s from './NotFoundPage.module.scss';

export function NotFoundPage() {
  const t = useTranslate('not_found');
  return (
    <Page className={s.notFound}>
      <h1>{t('title')}</h1>
    </Page>
  );
}
