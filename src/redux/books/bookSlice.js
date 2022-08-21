import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
};

export const postBook = createAsyncThunk('books/postbooks', async ({ data, id }) => {
  await fetch(`http://localhost:3001/users/${id}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book: {
        title: data.title,
        author: data.author,
        genre: data.genre,
        user_id: id,
        current_chapter: data.current_chapter,
        total_chapters: data.total_chapters,
      },
    }),
  });
});

export const getBooks = createAsyncThunk('books/getBooks', async (userId) => {
  const res = await fetch(`http://localhost:3001/users/${userId}/books`);
  const data = await res.json();
  return data.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async ({ userId, bookId }) => {
  await fetch(`http://localhost:3001/users/${userId}/books/${bookId}`, {
    method: 'DELETE',
    header: { 'Content-Type': 'application/json' },
  });
});

export const updateBook = createAsyncThunk('books/updateBook', async (body, userId) => {
  const res = await fetch(`http://localhost:3001/users/${userId}/books`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book: {
        title: body.title,
        author: body.author,
        genre: body.genre,
        userId,
        current_chapter: body.current_chapter,
        total_chapters: body.total_chapters,
      },
    }),
  });

  const data = await res.json();
  return data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postBook.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(postBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    });
    builder.addCase(deleteBook.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    });
    builder.addCase(getBooks.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    });
    builder.addCase(updateBook.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    });
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
