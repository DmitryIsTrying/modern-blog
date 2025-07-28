import { createSlice } from '@reduxjs/toolkit'

import { CounterSchema } from '../types/counterSchema'

import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: CounterSchema = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice
