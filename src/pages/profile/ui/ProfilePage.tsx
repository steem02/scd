import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { DynamicModuleLoader } from '@/shared/lib/store/DynamicModuleLoader';
import { profileReducer } from '@/entities/Profile/module/slice/profileSlice';
import { memo } from 'react';

export default memo(function ProfilePage() {
  const t = useTranslate();
  return (
    <DynamicModuleLoader reducers={{ profile: profileReducer }} removeAfterUnmount>
      <Page>{t('title', { ns: 'profile' })}</Page>
    </DynamicModuleLoader>
  );
});
