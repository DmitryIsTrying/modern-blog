import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Currency } from '../../model/types/currency.types'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Select, SelectOption } from '@/shared/ui/Select/Select'

const currency: SelectOption[] = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
]

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readOnly?: boolean
}

export const CurrencySelect = memo(({ className, onChange, value, readOnly }: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      options={currency}
      label={t('Укажите валюту')}
      readOnly={readOnly}
    />
  )
})

CurrencySelect.displayName = 'CurrencySelect'
