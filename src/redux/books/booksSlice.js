import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
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
        id: action.payload.id,
      });
    },
    removeBook: (state, action) => ({
      ...state,
      bookItems: state.bookItems.filter((item) => item.id !== action.payload.bookData.id),
    }),

  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
