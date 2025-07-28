import { ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import '@storybook/react'

declare module '@storybook/react' {
  interface Parameters {
    redux?: {
      initialState?: DeepPartial<StateSchema>
      asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    }
  }
}
