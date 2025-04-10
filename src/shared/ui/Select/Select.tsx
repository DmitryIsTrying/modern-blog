import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Select = memo(({ className, label, options, onChange, value, readOnly }: SelectProps) => {
  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select disabled={readOnly} value={value} onChange={onChangeHandler} className={cls.select}>
        {optionsList}
      </select>
    </div>
  )
})

Select.displayName = 'Select'
