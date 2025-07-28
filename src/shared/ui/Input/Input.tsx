import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

import cls from './Input.module.scss'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

export enum InputTheme {
  PRIMARY = 'primary',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  theme?: InputTheme
  value?: string | number
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Input = memo(
  ({
    className,
    theme = InputTheme.PRIMARY,
    onChange,
    type = 'text',
    autoFocus,
    readOnly,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    const handleOnBlur = () => {
      setIsFocused(false)
    }

    const handleOnFocus = () => {
      if (!readOnly) setIsFocused(true)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOnSelect = (e: any) => {
      if (e.target.clientWidth > e?.target?.selectionStart * 13) {
        setCaretPosition(e?.target?.selectionStart || 0)
      }
    }

    const mods: Mods = {
      [cls.readOnly]: readOnly,
    }

    useEffect(() => {
      if (autoFocus && ref.current) {
        setIsFocused(true)
        ref.current.focus()
      }
    }, [autoFocus])

    return (
      <div className={cls.wrapper}>
        <input
          {...otherProps}
          readOnly={readOnly}
          ref={ref}
          type={type}
          onChange={handleOnChange}
          className={classNames(cls.input, mods, [className, cls[theme]])}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSelect={handleOnSelect}
        />
        {isFocused && <span style={{ left: `${caretPosition * 13}px` }} className={cls.caret} />}
      </div>
    )
  },
)

Input.displayName = 'Input component'
