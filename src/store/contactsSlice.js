import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

// Create Redux state slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    // Define reducers
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        element => element.id !== action.payload
      );
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

// Export reducer generated by "createSlice()":
export default contactsSlice.reducer;

// reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
