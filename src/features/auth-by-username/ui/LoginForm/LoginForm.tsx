import { useTranslate } from '@/shared/hooks/useTranslate';
import { Input } from '@/shared/ui/Input/Input';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './LoginForm.module.scss';
import { type FormEvent, memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { loginByUserName } from '@/features/auth-by-username/model/services/loginByUserName/loginByUserName';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
  onSubmit?: () => void;
}

function Form({ className }: LoginFormProps) {
  const t = useTranslate();
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await appDispatch(loginByUserName({ username, password }));
    },
    [username, password, error]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className={cn([className, s.loginForm])}>
        <Text>{t('form.titles.login')}</Text>
        <Input
          name={'username'}
          placeholder={'Введите username'}
          autoFocus
          onChange={onChangeUserName}
          value={username}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Введите пароль'}
          onChange={onChangePassword}
          value={password}
        />

        <Button className={s.submitBtn} type='submit' disabled={isLoading}>
          {t('form.submit')}
        </Button>
        {error != null && <Text variant={'error'}>{error}</Text>}
      </div>
    </form>
  );
}

export const LoginForm = memo(Form);
