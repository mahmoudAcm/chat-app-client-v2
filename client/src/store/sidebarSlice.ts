import { createSlice } from '@reduxjs/toolkit';

export interface contact {
  id?: string;
  username: string;
  firstname: string;
  icon?: string;
  location: string;
}

export interface sidebarState {
  contacts: Array<contact>;
  contact?: contact;
  isLoading: boolean;
  hasNext: boolean;
}

const initialState: sidebarState = {
  contacts: [
    {
      id: '1',
      username: 'Mahmoud Tarek',
      firstname: 'Mahmoud',
      location: 'Cairo, Tanta',
    },
    {
      id: '2',
      username: 'Mahmoud Tarek',
      firstname: 'Mahmoud',
      location: 'Cairo, Tanta',
    },
    {
      id: '3',
      username: 'Mahmoud Tarek',
      firstname: 'Mahmoud',
      location: 'Cairo, Tanta',
    },
    {
      id: '4',
      username: 'Mahmoud Tarek',
      firstname: 'Mahmoud',
      location: 'Cairo, Tanta',
    },
  ],
  isLoading: false,
  hasNext: false,
};

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    loadContacts(state, action) {
      state.contacts = [state.contacts, action.payload];
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
