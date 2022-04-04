import { combineReducers, createStore } from 'redux';
import categoriesReducer from './categories/categories';
import reducer from './books/books';

const root = combineReducers(
  {
    categoriesReducer,
    reducer,
  },
);

const store = createStore(root);
export default store;
