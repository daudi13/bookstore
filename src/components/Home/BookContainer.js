import React, { useState } from 'react';
import BookForm from './BookForm';
import './BookContainer.css';
import BookList from './BookList';

const BookContainer = () => {
  const [bookform, setBookForm] = useState(false);
  return (
    <div className="row">
      <BookList />
      <button type="button" onClick={() => setBookForm(true)} className="addBook">+</button>
      {
        bookform
        && <BookForm closeModal={setBookForm} />
      }
    </div>
  );
};

export default BookContainer;
