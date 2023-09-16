import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import style from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactsSelector';
export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  return (
    <div className={style.main_section}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {contacts && !isLoading && <ContactList />}
    </div>
  );
};
