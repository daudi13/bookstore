import React from 'react';
import Book from './Book/Book';
import './BookList.css';

const BookList = () => {
  const [books, setBook] = React.useState([
    {
      id: 1,
      author: 'Mark Twain',
      title: 'In the heart',
      complete: '55%',
      chapter: '12',
      genre: 'fiction',
    },
    {
      id: 2,
      author: 'Mark Twain',
      title: 'In the heart',
      complete: '55%',
      chapter: '12',
      genre: 'fiction',
    },
    {
      id: 3,
      author: 'Mark Twain',
      title: 'In the heart',
      complete: '55%',
      chapter: '12',
    }]);

  const createBook = () => (
    setBook((prevBook) => prevBook)
  );

  return (
    <ul className="booklist-box">
      {
        books.map((book) => (
          <Book
            func={createBook}
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            complete={book.complete}
            chapter={book.chapter}
          />
        ))
    }

    </ul>
  );
};

export default BookList;
