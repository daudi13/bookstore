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

  return (
    <ul className="booklist-box">
      {
        bookList.length ? bookList.map((book) => {
          const progress = Math.floor(Math.random() * 30);
          const chapter = Math.floor((progress / 30) * 100);
          return (
            <Book
              key={book.item_id}
              book={book}
              chapter={chapter}
              progress={progress}
            />
          );
        }) : <h2 className="notice">No books to display!!</h2>
    }
    </ul>
  );
};

export default BookList;
