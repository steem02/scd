import { cn } from '@/shared/lib/classNames/classNames';
import s from './Header.module.scss';
import { useTranslate } from '@/shared/hooks/useTranslate';
import { Button } from '@/shared/ui/Button';
import { useCallback, useEffect, useState } from 'react';
import { LoginModal } from '@/features/auth-by-username';
import { useDispatch, useSelector } from 'react-redux';
import { getUserState } from '@/entities/User/model/selectors/getUserState/getUserState';
import { userActions } from '@/entities/User';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const t = useTranslate();
  const authData = useSelector(getUserState);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (authData != null) {
      setIsOpen(false);
    }
  }, [authData]);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  return (
    <div className={cn([className, s.root])}>
      {authData != null ? (
        <Button onClick={logout}>{t('logout')}</Button>
      ) : (
        <Button onClick={() => setIsOpen(true)}>{t('login')}</Button>
      )}
      <LoginModal isOpen={isOpen} onSubmit={() => setIsOpen(false)} />
    </div>
  );
}
