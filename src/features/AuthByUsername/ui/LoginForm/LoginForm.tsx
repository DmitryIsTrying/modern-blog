import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { isLoading, password, username, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }))
  }, [username, password])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input value={username} onChange={onChangeUsername} autoFocus placeholder={t('Введите имя')} />
      <Input value={password} onChange={onChangePassword} placeholder={t('Введите пароль')} type='password' />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.loginBtn}
      >
        {t('войти')}
      </Button>
    </div>
  )
}
