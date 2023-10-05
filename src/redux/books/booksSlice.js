import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems.push({
        title: action.payload.title,
        author: action.payload.author,
        itemId: uuidv4(),
      });
    },
    removeBook: (state, action) => ({
      ...state,
      bookItems: state.bookItems.filter((item) => item.itemId !== action.payload.itemId),
    }),

  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
