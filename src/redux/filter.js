import { createSlice } from '@reduxjs/toolkit';



const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { getFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
