import { ReducersMapObject } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: PropsWithChildren<StoreProviderProps>) => {
  const navigate = useNavigate()
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate)

  return <Provider store={store}>{children}</Provider>
}
