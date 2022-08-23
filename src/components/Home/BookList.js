/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt';
import { getBooks } from '../../redux/books/bookSlice';
import './BookList.css';
import Book from './Book/Book';

const BookList = () => {
  const myToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  const decodedToken = decodeToken(myToken);
  const currentUserId = +(decodedToken.sub);

  useEffect(() => {
    dispatch(getBooks(currentUserId));
  }, []);

  const bookList = books === undefined ? dispatch(getBooks(currentUserId)) : books;

  return (
    <ul className="booklist-box">
      {
        bookList.length ? bookList.map((book) => {
          const percentage = Math.floor((+(book.current_chapter) / +(book.total_chapters)) * 100);
          return (
            <Book
              key={book.id}
              book={book}
              percent={percentage}
            />
          );
        }) : <h2 className="notice">No books to display!!</h2>
    }
    </ul>
  );
};

export default BookList;
