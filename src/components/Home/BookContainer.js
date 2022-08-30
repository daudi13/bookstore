import React, { useEffect, useState } from 'react';
import BookForm from './BookForm';
import './BookContainer.css';
import BookList from './BookList';

const BookContainer = () => {
  const [bookform, setBookForm] = useState(false);
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  }, [alert]);

  return (
    <div className="row">
      {
        alert && <p className="success">you&apos;re logged in!!</p>
      }
      <BookList />
      <button type="button" onClick={() => setBookForm(true)} className="addBook" title="Add Book" aria-label="add book">+</button>
      {
        bookform
        && <BookForm closeModal={setBookForm} />
      }
    </div>
  );
};

export default BookContainer;
