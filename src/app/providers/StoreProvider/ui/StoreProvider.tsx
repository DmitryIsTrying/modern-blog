import { DeepPartial } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
