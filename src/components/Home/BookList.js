/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/bookSlice';
import './BookList.css';
import Book from './Book/Book';

const BookList = () => {
  const books = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(1));
  }, []);

  const bookList = books.books.data;

  console.log(bookList);

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
