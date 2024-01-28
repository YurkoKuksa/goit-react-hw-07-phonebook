import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchNameThunk,
} from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchNameThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.concat(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          addContactsThunk.rejected,
          fetchNameThunk.rejected,
          deleteContactsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactsThunk.pending,
          fetchNameThunk.pending,
          deleteContactsThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addContactsThunk.fulfilled,
          fetchNameThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        state => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
