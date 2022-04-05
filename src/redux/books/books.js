const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const intialState = [];

export const addbook = (payload) => ({
  type: ADD_BOOK,
  index: 0,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  index: 0,
  payload,
});

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.map((book, index) => {
        if (action.index === index) state.splice(index - 1, 1);
        return book;
      });
    default:
      return state;
  }
};

export default reducer;
