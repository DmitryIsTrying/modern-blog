import { Profile, ValidateProfileError } from '../../types/profile'

const MIN_AGE_VALUE = 10
const MAX_AGE_VALUE = 100

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { first, lastname, age, country } = profile
  const errors: ValidateProfileError[] = []

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age) || age < MIN_AGE_VALUE || age > MAX_AGE_VALUE) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
