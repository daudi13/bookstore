import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import booksReducer from './books/bookSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});

export default store;
