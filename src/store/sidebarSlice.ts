import { createSlice } from '@reduxjs/toolkit';

export interface sidebar {
  id?: string;
  online?: boolean;
  icon?: string;
  username: string;
  firstname: string;
}

export interface contact extends sidebar {
  location: string;
  data?: contact;
}

export interface discussion extends sidebar {
  createdAt?: string;
  updatedAt?: string;
  type: 'connected' | 'disconnected';
  message: string;
  room: string;
}

export interface sidebarState {
  contacts: Array<contact>;
  contact?: contact;
  discussions: Array<discussion>;
  discussion?: discussion;
  isLoading: {
    [index: string]: boolean;
  };
  hasNext: {
    [index: string]: boolean;
  };
}

const initialState: sidebarState = {
  contacts: [],
  discussions: [],
  isLoading: { discussion: false, contact: false },
  hasNext: { discussion: false, contact: false },
};

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setLoading(state, action) {
      const keys = Object.keys(action.payload);
      for (let key of keys) {
        state.isLoading[key] = action.payload[key];
      }
    },
    setHasNext(state, action) {
      const keys = Object.keys(action.payload);
      for (let key of keys) {
        state.hasNext[key] = action.payload[key];
      }
    },
    setContact(state, action) {
      state.contact = action.payload;
    },
    loadContacts(state, action) {
      state.contacts = action.payload;
    },
    loadMoreContacts(state, action) {
      state.contacts = [...state.contacts, ...action.payload];
    },
    loadDiscussions(state, action) {
      state.discussions = action.payload;
    },
    loadMoreDiscussions(state, action) {
      state.discussions = [...state.discussions, ...action.payload];
    },
    updateDiscussions(state, action) {
      state.discussions = [
        action.payload,
        ...state.discussions.filter(
          (discussion: any) => action.payload.room != discussion.room,
        ),
      ];
    },
  },
});

export const {
  setLoading,
  setHasNext,
  setContact,
  loadContacts,
  loadMoreContacts,
  loadDiscussions,
  loadMoreDiscussions,
  updateDiscussions,
} = sidebar.actions;

export default sidebar;
