import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import '@storybook/react'

declare module '@storybook/react' {
  interface Parameters {
    redux?: {
      initialState?: DeepPartial<StateSchema>
    }
  }
}
