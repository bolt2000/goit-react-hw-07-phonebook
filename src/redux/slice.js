import { createSlice } from '@reduxjs/toolkit';
import {
  ContactsList,
  ContactsDel,
  ContactsAdd,
} from './contacts/contactOperation';


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
      .addCase(ContactsList.pending, handlePending)
      .addCase(ContactsList.rejected, handleRejected)
      .addCase(ContactsList.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(ContactsAdd.pending, handlePending)
      .addCase(ContactsAdd.rejected, handleRejected)
      .addCase(ContactsAdd.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })

      .addCase(ContactsDel.pending, handlePending)
      .addCase(ContactsDel.rejected, handleRejected)
      .addCase(ContactsDel.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },

  changeFilter(state, { payload }) {
    state.filter = payload;
  },
});

   

export const { addContactAction, delContactAction, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;