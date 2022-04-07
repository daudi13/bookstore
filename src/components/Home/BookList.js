/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from './Book/Book';
import './BookList.css';

const BookList = () => {
  const books = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookList = books.bookArr === undefined || Object.entries(books.bookArr).map((element) => ({
    item_id: element[0], ...element[1][0],
  }));

  console.log(bookList);
  return (
    <ul className="booklist-box">
      {
        bookList.length ? bookList.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        )) : <h2 className="notice">No books to display!!</h2>
    }
    </ul>
  );
};

export default BookList;
