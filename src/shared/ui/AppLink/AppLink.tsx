import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: PropsWithChildren<AppLinkProps>) => {
  return (
    <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} {...props}>
      {children}
    </Link>
  );
};
