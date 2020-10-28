import { createSlice } from '@reduxjs/toolkit';

export interface loadersState {
  isLoading: boolean;
}

const initialState: loadersState = { isLoading: true };

const loaders = createSlice({
  name: 'loaders',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loaders.actions;

export default loaders;
