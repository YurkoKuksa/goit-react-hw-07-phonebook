export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
