import axios from 'axios';



const contactsAPI = axios.create({
  baseURL: 'https://6486d577beba6297278f4160.mockapi.io',
});

export const getContacts = async () => {
  const { data } = await contactsAPI.get('contacts/');
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('/contacts', contact);
  return data;
};

export const delContacts = async id => {
  console.log(id);
  const { data } = await contactsAPI.delete(`/contacts/${id}`);
  return data;
};

