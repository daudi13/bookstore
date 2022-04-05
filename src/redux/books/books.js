import axios from 'axios';
import API_URL from '../../Database/database';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const intialState = [];

export const addbook = (book) => async (dispatch) => {
  await axios(API_URL)
    .then((response) => response.json())
    .then(
      () => dispatch({ type: ADD_BOOK, payload: book }),
      () => dispatch({ type: ADD_BOOK, payload: null }),
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
