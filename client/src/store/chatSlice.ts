import { createSlice } from '@reduxjs/toolkit';

export interface message {
  message?: string;
  icon?: string;
  firstname?: string;
  date?: Date;
}

export interface chatState {
  messages: Array<message>;
  type?: 'disconnected' | 'connected';
  details?: {
    username?: string;
    online?: boolean;
    room?: string;
  } & message;
  isLoading: boolean;
  hasNext: boolean;
}

const initialState: chatState = {
  messages: [],
  details: {
    online: true,
    firstname: 'Mahmoud',
    username: 'Mahmoud Tarek',
  },
  isLoading: false,
  hasNext: true,
};

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    selectChat(state, action) {
      state.details = action.payload.details;
      state.type = action.payload.type;
      state.messages = action.payload.messages;
    },
    setHasNext(state, action) {
      state.hasNext = action.payload;
    },
  },
});

export const { ...rest } = chat.actions;

export default chat;
