import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './ProfilePageHeader.module.scss'

import { getProfileReadonly, profileActions, updateProfileData } from '@/entities/Profile'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Text } from '@/shared/ui/Text/Text'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()

  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [])

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={cls.btnsContainer}>
          <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
            {t('Отменить')}
          </Button>
          <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
            {t('Сохранить')}
          </Button>
        </div>
      )}
    </div>
  )
}
