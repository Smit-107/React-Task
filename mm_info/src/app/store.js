import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/counter/counterSlice'

export default configureStore({
  reducer: {counter: counterReducer}
})