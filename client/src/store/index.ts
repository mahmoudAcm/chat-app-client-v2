import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = { value: 0 };

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action){
      console.log(action);
      state.value++;
    }
  }
});

export const store = configureStore({
  reducer: {
    counter: counter.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});