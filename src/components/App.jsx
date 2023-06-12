import Form from './Phonebook/Form';
import ContactList from './ContactsList/ContactsList';
import css from './App.module.css';
import Filter from './Filter/FilterContact';

export default function App() {
  return (
    <div className={css.style}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
