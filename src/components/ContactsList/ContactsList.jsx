import React, { useEffect } from 'react';
import {
  ButtonSbm,
  List,
  ParaghNumber,
  Paragraph,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'store/contactsSlice';
import { fetchNameThunk } from 'store/operations';
import { selectContacts, selectFilter } from 'store/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNameThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
