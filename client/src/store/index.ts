import { configureStore } from '@reduxjs/toolkit';
import chat from './chatSlice';
import loaders from './loadersSlice';
import sidebar from './sidebarSlice';

export const store = configureStore({
  reducer: {
    loaders: loaders.reducer,
    sidebar: sidebar.reducer,
    chat: chat.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
