import { useTranslate } from '@/shared/hooks/useTranslate';
import s from './PageError.module.scss';
import { Button } from '@/shared/ui/Button';
import { memo } from 'react';

export const PageError = memo(function PageError() {
  const t = useTranslate('translation');

  const onReload = () => {
    location.reload();
  };

  return (
    <div className={s.error}>
      <h1>{t('oops')}</h1>
      <Button onClick={onReload}>{t('reload')}</Button>
    </div>
  );
});
