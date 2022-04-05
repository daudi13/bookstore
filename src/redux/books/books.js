import axios from 'axios';
import API_URL from '../../Database/database';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const intialState = [];

export const addbook = (book) => async (dispatch) => {
  await axios.post(API_URL)
    .then((response) => response.json())
    .then(
      () => dispatch({ type: ADD_BOOK, payload: book }),
      () => dispatch({ type: ADD_BOOK, payload: null }),
    );
};

export const getBooks = () => async (dispatch) => {
  await axios.get(API_URL)
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
    default:
      return state;
  }
};

export default reducer;
