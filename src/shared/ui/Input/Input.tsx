import { classNames } from "@/shared/lib/classNames/classNames";
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from "./Input.module.scss";

export enum InputTheme {
    PRIMARY = "primary",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(
    ({ className, theme = InputTheme.PRIMARY, onChange, type = "text", autoFocus, ...otherProps }: InputProps) => {
        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);
        const ref = useRef<HTMLInputElement>();

        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const handleOnBlur = () => {
            setIsFocused(false);
        };

        const handleOnFocus = () => {
            setIsFocused(true);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOnSelect = (e: any) => {
            if (e.target.clientWidth > e?.target?.selectionStart * 13) {
                setCaretPosition(e?.target?.selectionStart || 0);
            }
        };

        useEffect(() => {
            if (autoFocus) {
                setIsFocused(true);
                console.log("WORKING HERE");

                ref.current.focus();
            }
        }, [autoFocus]);

        return (
            <div className={cls.wrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    type={type}
                    onChange={handleOnChange}
                    className={classNames(cls.input, {}, [className, cls[theme]])}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onSelect={handleOnSelect}
                />
                {isFocused && <span style={{ left: `${caretPosition * 13}px` }} className={cls.caret} />}
            </div>
        );
    },
);

Input.displayName = "Input component";
