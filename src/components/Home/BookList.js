import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book/Book';
import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.reducer);
  console.log(books);
  return (
    <ul className="booklist-box">
      {
        books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))
    }
    </ul>
  );
};

export default BookList;
