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
  console.log(currentUserId);

  useEffect(() => {
    dispatch(getBooks(currentUserId));
  }, []);
  // const bookFunc = async (books) => {
  //   if (!books.isLoading && books.books) {
  //     const booksArr =  books.books;
  //     return booksArr;
  //   } if (books.isLoading) {
  //     return '...Books Loading';
  //   } if (!books.isLoading) {
  //     return 'No Books to display';
  //   }
  // };

  // console.log(bookFunc(books))

  const bookList = books === undefined ? window.location.reload(true) : books;

  console.log(books);

  return (
    <ul className="booklist-box">
      {
        bookList.length ? bookList.map((book) => {
          const progress = Math.floor(Math.random() * 30);
          const chapter = Math.floor((progress / 30) * 100);
          return (
            <Book
              key={book.id}
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
