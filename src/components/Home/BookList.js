/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from './Book/Book';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.reducer, shallowEqual);

  const { bookArr } = books;

  console.log(bookArr);
  return (
    <ul className="booklist-box">
      {
        books.length ? books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        )) : <h2 className="notice">No books to display!!</h2>
    }
    </ul>
  );
};

export default BookList;
