import { useTranslate } from '@/shared/hooks/useTranslate';
import { Input } from '@/shared/ui/Input/Input';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './LoginForm.module.scss';
import { type FormEvent, memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '@/features/auth-by-username/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader } from '@/shared/lib/store/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
  onSubmit?: () => void;
}

const initialReducers = { loginForm: loginReducer };

function Form({ className }: LoginFormProps) {
  const t = useTranslate();
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (username != null && password != null) {
        await appDispatch(loginByUserName({ username, password }));
      }
    },
    [username, password, error]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
}

export default memo(Form);
