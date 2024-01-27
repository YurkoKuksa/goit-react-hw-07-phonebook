import { HeaderTwo, MainContainer } from './App.styled';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import { fetchNameThunk } from 'store/operations';
// import { selectError, selectIsLoading } from 'store/selectors';

export const App = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану

  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNameThunk());
  }, [dispatch]);

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

// Рендерим розмітку в залежності від значень у стані
// return (
//   <div>
//     {isLoading && <p>Loading tasks...</p>}
//     {error && <p>{error}</p>}
//     <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//   </div>
// );
