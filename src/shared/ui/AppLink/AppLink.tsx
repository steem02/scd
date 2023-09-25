import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/shared/libs/classNames/classNames';
import s from './AppLink.module.scss';

type LinkVariant = 'primary' | 'inverse';

type AppLinkProps = LinkProps & {
  className?: string;
  variant?: LinkVariant;
};

export function AppLink(props: AppLinkProps) {
  const { children, className, variant = 'primary', ...rest } = props;

  return (
    <Link className={cn([className, s.root, s[variant]])} {...rest}>
      {children}
    </Link>
  );
}
