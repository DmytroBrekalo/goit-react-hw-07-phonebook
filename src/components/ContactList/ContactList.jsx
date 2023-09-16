import { useDispatch, useSelector } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const stateFilter = useSelector(state => state.filter);

  const getFilteredPerson = () => {
    const normalisedFilter = stateFilter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };
  return (
    <ul className={style.list}>
      {getFilteredPerson().map(({ id, name, phone }) => {
        return (
          <li key={id} id={id} className={style.list_item}>
            {name}: {phone}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
