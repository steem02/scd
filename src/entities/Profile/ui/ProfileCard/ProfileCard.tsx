import { useTranslate } from '@/shared/hooks/useTranslate';
import { useSelector } from 'react-redux';
import { getProfileData } from '@/entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from '@/entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '@/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from '@/shared/ui/Text/Text';
import { cn } from '@/shared/lib/classNames/classNames';
import st from './ProfileCard.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
  const t = useTranslate('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  return (
    <div className={cn([st.profileCard, className])}>
      <div className={st.header}>
        <Text>{t('title')}</Text>
        <Button>{t('edit')}</Button>
      </div>
      <div className={st.data}>
        <Input className={st.input} value={data?.first} placeholder={t('firstname')} />
        <Input className={st.input} value={data?.lastname} placeholder={t('lastname')} />
      </div>
    </div>
  );
}
