import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter_app/CounterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
  })
}