import { object } from 'prop-types';
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

export const addBookSuccess = (booksArr) => ({
  type: ADD_BOOK_SUCCESS,
  payload: booksArr,
});

export const addBookFail = (error) => ({
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
        dispatch(addBookSuccess(bookNew));
      })
      .catch((error) => {
        dispatch(addBookFail(error.message));
      });
  };
}

export const getBookRequest = () => ({
  type: GET_BOOKS_REQUEST,
});

export const getBookSuccess = (bookArr) => ({
  type: GET_BOOKS_SUCCESS,
  payload: bookArr,
});

export const getBooksFail = (error) => ({
  type: GET_BOOKS_FAIL,
  payload: error,
});

export function getBooks() {
  return (dispatch) => {
    dispatch(getBookRequest());
    Database.getbooks()
      .then((book) => {
        dispatch(getBookSuccess(book));
      })
      .catch((error) => dispatch(getBooksFail(error.message)));
  };
}

export const removeBookRequest = () => ({
  type: REMOVE_BOOK_REQUEST,
});

export const removeBookSuccess = (id) => ({
  type: REMOVE_BOOK_SUCCESS,
  payload: id,
});

export const removeBookFail = (error) => ({
  type: REMOVE_BOOK_FAIL,
  payload: error,
});

export function removeBook(id) {
  return (dispatch) => {
    dispatch(removeBookRequest());
    Database.delBook(id)
      .then(() => {
        dispatch(removeBookSuccess(id));
      })
      .catch((error) => {
        dispatch(removeBookFail(error.message));
      });
  };
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return { ...state, loading: true };

    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        bookArr: { ...state.bookArr, ...action.payload },
        error: '',
      };

    case ADD_BOOK_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookArr: action.payload,
        error: '',
      };

    case GET_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case REMOVE_BOOK_REQUEST:
      return { ...state, loading: true };

    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        bookArr: object.fromEntries(
          Object.entries(state.bookArr).filter(
            (e) => e[0] !== action.payload,
          ),
        ),
        error: '',
      };

    case REMOVE_BOOK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
