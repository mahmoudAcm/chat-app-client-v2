import { store } from '../../../store';
import { contact, setContact } from '../../../store/sidebarSlice';

/**
 * @description it sets the sidebar contact item
 * @param member the user data
 * @returns eventHandler
 */
export const selectMember = (member: contact) => {
  const { dispatch } = store;
  return () => {
    dispatch(setContact(member));
  };
};

/**
 * @description used to fetch and search for people to add as a contact from database
 * @param ev the event target
 */
export const searchForContacts = (ev: any) => {
  const target: HTMLInputElement = ev.target;
};
