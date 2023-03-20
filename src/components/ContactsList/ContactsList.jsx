import React from 'react';
import { useSelector } from 'react-redux';
import { Contacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </Contacts>
  );
};

export default ContactsList;
