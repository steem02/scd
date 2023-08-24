import { cn } from "@/shared/libs/classNames";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <div className={ cn([ className, s.root ]) }>
    <AppLink to={ "/main" } variant={ "inverse" } className={ s.link }>MAIN</AppLink>
    <AppLink to={ "/about" } variant={ "inverse" } className={ s.link }>ABOUT</AppLink>
  </div>;
}