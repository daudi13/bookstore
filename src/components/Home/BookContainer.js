import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import './BookContainer.css';

const BookContainer = () => {
  const books = [
    {
      title: 'Hunger Games',
      author: 'Suzzanne Collins',
      genre: 'Action',
      complete: '23%',
    },
    {
      title: 'Hunger Games',
      author: 'Suzzanne Collins',
      genre: 'Action',
      complete: '23%',
    },
    {
      title: 'Hunger Games',
      author: 'Suzzanne Collins',
      genre: 'Action',
      complete: '23%',
    },
  ];

  return (

    <div className="row">
      <BookList />
      <BookForm />
    </div>
  );
};

export default BookContainer;
