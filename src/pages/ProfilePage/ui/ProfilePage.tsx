import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from '@/entities/Profile'
import { ProfilePageHeader } from '@/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }))
  }, [])

  const onChangeAge = useCallback((value: string) => {
    const age = Number(value || 0)
    if (isNaN(age)) return

    dispatch(profileActions.updateProfile({ age }))
  }, [])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [])

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [])

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [])

  return (
    <DynamicModuleLoader removeOnUnmount reducers={reducers}>
      <div className={className}>
        <ProfilePageHeader />
        <ProfileCard
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          data={formData}
          error={error}
          isLoading={isLoading}
          readOnly={readOnly}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
        />
      </div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage
