import { Country, CountrySelect } from '@/entities/Country'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Input } from '@/shared/ui/Input/Input'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
  readOnly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    readOnly,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt='User photo' />
          </div>
        )}
        <Input readOnly={readOnly} onChange={onChangeFirstName} value={data?.first} placeholder={t('Ваше имя')} />
        <Input readOnly={readOnly} onChange={onChangeLastName} value={data?.lastname} placeholder={t('Ваша фамилия')} />
        <Input readOnly={readOnly} onChange={onChangeAge} value={data?.age} placeholder={t('Ваш возраст')} />
        <Input readOnly={readOnly} onChange={onChangeCity} value={data?.city} placeholder={t('Город')} />
        <Input
          readOnly={readOnly}
          onChange={onChangeUsername}
          value={data?.username}
          placeholder={t('Имя пользователя')}
        />
        <Input
          readOnly={readOnly}
          onChange={onChangeAvatar}
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
        />
        <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
        <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readOnly} />
      </div>
    </div>
  )
}
