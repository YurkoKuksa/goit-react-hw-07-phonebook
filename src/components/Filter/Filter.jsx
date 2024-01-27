import { useDispatch, useSelector } from 'react-redux';
import { InputStyle, LabelWrapper } from './Filter.styled';
import { filterContacts } from 'store/filterSlice';
import { selectFilter } from 'store/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <LabelWrapper>
      Find contacts by name:&nbsp;
      <InputStyle type="text" value={filter} onChange={handleChange} />
    </LabelWrapper>
  );
};
