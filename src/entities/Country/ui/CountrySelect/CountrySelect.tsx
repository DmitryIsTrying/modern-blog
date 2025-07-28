import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Country } from '../../model/types/country'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Select, SelectOption } from '@/shared/ui/Select/Select'

const countries: SelectOption[] = [
  { value: Country.ARMENIA, content: Country.ARMENIA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.UKRAINE, content: Country.UKRAINE },
]

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readOnly?: boolean
}

export const CountrySelect = memo(({ className, onChange, value, readOnly }: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange],
  )

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      options={countries}
      label={t('Укажите страну')}
      readOnly={readOnly}
    />
  )
})

CountrySelect.displayName = 'CountrySelect'
