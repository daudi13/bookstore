import { func } from 'prop-types';
import Database from '../../Database/database';

const ADD_BOOK_REQUEST = 'bookstore/books/ADD_BOOK_REQUEST';
const ADD_BOOK_SUCCESS = 'bookstore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAIL = 'bookstore/books/ADD_BOOK_FAIL';

const GET_BOOKS_REQUEST = 'bookstore/books/GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'bookstore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAIL = 'bookstore/books/GET_BOOKS_FAIL';

const REMOVE_BOOK_REQUEST = 'bookstore/books/REMOVE_BOOK_REQUEST';
const REMOVE_BOOK_SUCCESS = 'bookstore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAIL = 'bookstore/books/REMOVE_BOOK_FAIL';

const intialState = [{
  loading: false,
  booksArr: {},
  error: '',
}];

export const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});

export const addbookSuccess = (booksArr) => ({
  type: ADD_BOOK_SUCCESS,
  payload: booksArr,
});

export const addbookFail = (error) => ({
  type: ADD_BOOK_FAIL,
  payload: error,
});

export function addbook(book) {
  return (dispatch) => {
    dispatch(addBookRequest());
    const {
      id, title, author, category,
    } = book;
    Database.addBooks(id, title, author, category)
      .then(() => {
        const bookNew = {};
        bookNew[id] = [{ title, author, category }];
        dispatch(addbookSuccess(bookNew));
      })
      .catch((error) => {
        dispatch(addbookFail(error.message));
      });
  };
}

export const getBooks = () => async (dispatch) => {
  await (API_URL)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: GET_BOOK, payload: data }),
      () => dispatch({ type: GET_BOOK, payload: [] }),
    );
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    case GET_BOOK: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
