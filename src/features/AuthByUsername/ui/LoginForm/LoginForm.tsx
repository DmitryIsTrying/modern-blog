import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [onSuccess, username, password])

  return (
    <DynamicModuleLoader removeOnUnmount reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
}

export default LoginForm
