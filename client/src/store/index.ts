import { configureStore } from '@reduxjs/toolkit';
import loaders from './loadersSlice';

export const store = configureStore({
  reducer: {
    loaders: loaders.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
