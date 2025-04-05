import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  let state: DeepPartial<LoginSchema>

  beforeEach(() => {
    state = { error: null, isLoading: false, password: '', username: '' }
  })

  test('test set username', () => {
    const action = loginActions.setUsername('test')
    const changedState = loginReducer(state as LoginSchema, action)
    expect(changedState.username).toEqual('test')
  })

  test('test set password', () => {
    const action = loginActions.setPassword('test')
    const changedState = loginReducer(state as LoginSchema, action)
    expect(changedState.password).toEqual('test')
  })
})
