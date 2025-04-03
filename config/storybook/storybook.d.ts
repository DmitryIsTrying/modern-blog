import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import '@storybook/react'

declare module '@storybook/react' {
  interface Parameters {
    redux?: {
      initialState?: DeepPartial<StateSchema>
      asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    }
  }
}
