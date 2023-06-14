export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contact = state.contacts.items;
  return contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};
