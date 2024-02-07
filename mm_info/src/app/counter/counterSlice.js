import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    demo:0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 10
    },
    decrement: state => {
      state.value -= 10
    },
     passData: (state, action) => {
      console.log("action",action);
      state.value -= action.payload
      console.log("state.value",state.value);
    },
    passData1: (state, action2) => {
      console.log("action",action2);
      state.value += action2.payload
      console.log("state.value",state.value);
    },passData2: (state, action1) => {
      state.demo = action1.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, passData ,passData1,passData2} = counterSlice.actions

export default counterSlice.reducer