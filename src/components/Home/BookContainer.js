import React from 'react';
import BookForm from './BookForm';
import './BookContainer.css';
import BookList from './BookList';

const BookContainer = () => (
  <div className="row">
    <BookList />
      <button type="button" onClick={() => setBookForm(true)}>Add book</button>
      {
        bookform
        && <BookForm closeModal={setBookForm} />
      }
    </div>
  );

export default BookContainer;
