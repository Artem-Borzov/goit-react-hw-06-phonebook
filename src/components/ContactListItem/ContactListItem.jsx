import React from 'react';
import { Contact, DeleteBtn } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      {name}: {number}
      <DeleteBtn
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
