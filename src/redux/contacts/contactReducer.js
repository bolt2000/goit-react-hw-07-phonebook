// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as contactAction from './contactAction';
// import {ContactsAdd, ContactsList, ContactsDel} from './contactOperation';

// const contacts = createReducer([], {
//   [fetchContactsList.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContactsList.pending]: () => true,
//   [fetchContactsList.fulfilled]: () => false,
//   [fetchContactsList.rejected]: () => false,
// });

// const contacts = createReducer([], {
//   [fetchContactsList.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContactsList.pending]: () => true,
//   [fetchContactsList.fulfilled]: () => false,
//   [fetchContactsList.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [contactAction.fetchContactsError]: (_, action) => action.payload,
//   [contactAction.fetchContactsRequest]: () => null,
// });

// export default combineReducers({
//     contacts,
//     isLoading,
//     // error,
// })
