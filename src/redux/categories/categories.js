const CATEGORIES = 'bookstore/categories/CATEGORIES';

const intialState = [];

export const categoriesStatus = (payload) => ({
  index: 0,
  type: CATEGORIES,
  payload,
});

const categoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return 'under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
