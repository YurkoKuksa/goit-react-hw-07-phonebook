import { Loader } from 'components/Loader/Loader';
import {
  ButtonSbm,
  List,
  ParaghNumber,
  Paragraph,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from 'store/operations';
import { selectContacts, selectFilter, selectIsLoading } from 'store/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectIsLoading);

  const getFilterData = () => {
    return contacts.filter(
      user =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterData();

  const handleDelete = async id => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <List key={id}>
          <Paragraph>{name}:&nbsp; </Paragraph>
          <ParaghNumber> {number} &nbsp;</ParaghNumber>

          {loading === id && <Loader />}

          <ButtonSbm
            onClick={() => handleDelete(id)}
            type="button"
            disabled={loading === id}
          >
            Delete
          </ButtonSbm>
        </List>
      ))}
    </ul>
  );
};
