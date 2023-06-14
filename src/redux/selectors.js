// export const getContacts = state => state.contacts;
// export const getFilter = state => state.filter;

// import { selectContacts } from 'redux/contacts/contacts-selector';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contact = state.contacts.items;
  return contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};