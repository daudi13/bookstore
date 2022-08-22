import React, { useState } from 'react';
import BookForm from './BookForm';
import './BookContainer.css';
import BookList from './BookList';

const BookContainer = () => (
  <div className="row">
    <BookList />
    <BookForm />
  </div>
);

export default BookContainer;
