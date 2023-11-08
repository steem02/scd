import { NavLink, type NavLinkProps } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

type LinkVariant = 'primary' | 'inverse';

type AppLinkProps = NavLinkProps & {
  className?: string;
  variant?: LinkVariant;
  children: React.ReactNode;
};

export function AppLink(props: AppLinkProps) {
  const { children, className, variant = 'primary', ...rest } = props;

  return (
    <NavLink
      className={({ isActive }) => cn([className, s.root, s[variant]], { [s.active]: isActive })}
      {...rest}
    >
      {children}
    </NavLink>
  );
}
