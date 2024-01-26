import React from 'react';
import {
  ButtonSbm,
  List,
  ParaghNumber,
  Paragraph,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'store/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const getFilterData = () => {
    return contacts.filter(
      user =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterData();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <List key={id}>
          <Paragraph>{name}:&nbsp; </Paragraph>
          <ParaghNumber> {number} &nbsp;</ParaghNumber>
          <ButtonSbm onClick={() => dispatch(removeContacts(id))} type="button">
            Delete
          </ButtonSbm>
        </List>
      ))}
    </ul>
  );
};
