import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ButtonSbm, FormContainer, InputStyle, LabelCont } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'store/contactsSlice';
import { selectContacts } from 'store/selectors';

export const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newObject = {
      id: nanoid(),
      name,
      number,
    };

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newObject.name.toLowerCase()
    );

    if (!isNameExists) {
      dispatch(addContacts(newObject));
      setName('');
      setNumber('');
    } else {
      alert(
        `Contact with the name "${newObject.name}" already exists. Please choose a different name.`
      );
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelCont>
        Name: &nbsp;
        <InputStyle
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          required
        />
      </LabelCont>
      <LabelCont>
        Number: &nbsp;
        <InputStyle
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          required
        />
      </LabelCont>
      <ButtonSbm>Add contact</ButtonSbm>
    </FormContainer>
  );
};
