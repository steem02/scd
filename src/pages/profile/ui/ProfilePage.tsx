import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { DynamicModuleLoader } from '@/shared/lib/store/DynamicModuleLoader';
import { profileReducer } from '@/entities/Profile/model/slice/profileSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { fetchProfileData, ProfileCard } from '@/entities/Profile';

export default memo(function ProfilePage() {
  const t = useTranslate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <DynamicModuleLoader reducers={{ profile: profileReducer }} removeAfterUnmount>
      <Page>
        <ProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
});
