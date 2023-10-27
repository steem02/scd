import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react';
import s from './Input.module.scss';
import { cn } from '@/shared/libs/classNames/classNames';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (value: string) => void;
  className?: string;
};

export const Input = memo(({ onChange, className, type = 'text', ...rest }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return <input {...rest} onChange={handleChange} className={cn([className, s.input])} />;
});
