import React from 'react';
import Book from './Book/Book';
import './BookList.css';

const BookList = () => (
  <ul className="booklist-box">
    <Book title="In the Heart" author="Mark Twain" genre="Fantacy" complete="55%" chapter="12" />
    <Book title="Hunger Games" author="Suzzanne Collins" genre="Action" complete="93%" chapter="33" />
    <Book title="Bourne Legacy" author="Robert Lundlum" genre="Suspense" complete="3%" chapter="27" />
  </ul>
);

export default BookList;
