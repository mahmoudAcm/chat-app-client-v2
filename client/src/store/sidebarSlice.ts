import { createSlice } from '@reduxjs/toolkit';

export interface sidebar {
  id?: string;
  username: string;
  firstname: string;
  online?: boolean;
  icon?: string;
}

export interface contact extends sidebar {
  location: string;
  data?: contact;
}

export interface discussion extends sidebar {
  type: 'connected' | 'disconnected';
}

export interface sidebarState {
  contacts: Array<contact>;
  contact?: contact;
  discussions: Array<discussion>;
  discussion?: discussion;
  isLoading: boolean;
  hasNext: boolean;
}

const initialState: sidebarState = {
  contacts: [],
  discussions: [],
  isLoading: false,
  hasNext: false,
};

for (let i = 0; i < 50; i++) {
  initialState.contacts.push({
    id: i + '',
    online: i & 1 ? true : false,
    username: 'Mahmoud Tarek',
    firstname: 'Mahmoud',
    location: 'Cairo, Tanta',
  });
}

for (let i = 0; i < 50; i++) {
  initialState.discussions.push({
    id: i + '',
    online: Math.random() * 1 ? true : false,
    username: 'Mahmoud Tarek',
    firstname: 'Mahmoud',
    type: i & 1 ? "disconnected": "connected"
  });
}

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    loadContacts(state, action) {
      state.contacts = [...state.contacts, ...action.payload];
    },
    setHasNext(state, action) {
      state.hasNext = action.payload;
    },
    setContact(state, action) {
      state.contact = action.payload;
    },
  },
});

export const {
  setLoading,
  loadContacts,
  setHasNext,
  setContact,
} = sidebar.actions;

export default sidebar;
