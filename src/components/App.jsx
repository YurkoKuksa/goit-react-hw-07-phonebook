import { Error, HeaderTwo, MainContainer } from './App.styled';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNameThunk } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNameThunk());
  }, [dispatch]);

  return (
    <MainContainer>
      {loading && <Loader />}
      <HeaderTwo>Phonebook</HeaderTwo>
      <Form />

      <HeaderTwo>Contacts</HeaderTwo>
      <Filter />
      {loading && <Loader />}
      {error && <Error>Something went wrong...</Error>}
      <ContactsList />
    </MainContainer>
  );
};
