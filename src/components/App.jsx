import { HeaderTwo, MainContainer } from './App.styled';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <MainContainer>
      <HeaderTwo>Phonebook</HeaderTwo>
      <Form />

      <HeaderTwo>Contacts</HeaderTwo>
      <Filter />

      <ContactsList />
    </MainContainer>
  );
};


