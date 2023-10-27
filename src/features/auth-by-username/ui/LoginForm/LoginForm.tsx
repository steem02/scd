import { useTranslate } from '@/shared/hooks/useTranslate';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const t = useTranslate();
  return (
    <div className={cn([className, s.loginForm])}>
      <p>{t('form.titles.login')}</p>
      <Input name={'username'} placeholder={'Введите username'} autoFocus />
      <Input type={'password'} name={'password'} placeholder={'Введите пароль'} />

      <Button className={s.submitBtn} type='submit'>
        {t('form.submit')}
      </Button>
    </div>
  );
}
