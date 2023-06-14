import { createSlice } from '@reduxjs/toolkit';
import {
  listContacts,
  deleteContact,
  addContact,
} from './contactAPI';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(listContacts.pending, handlePending)
      .addCase(listContacts.rejected, handleRejected)
      .addCase(listContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

// export const {addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
