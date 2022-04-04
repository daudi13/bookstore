import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import './BookContainer.css';

const BookContainer = () => (
  <div className="row">
    <BookList />
    <BookForm />
  </div>
);

export default BookContainer;
