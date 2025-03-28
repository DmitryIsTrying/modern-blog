import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...props}>
            {children}
        </button>
    );
};
