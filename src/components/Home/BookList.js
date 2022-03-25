import React from 'react';
import Bookitem from './Bookitem';
import './BookList.css';

const BookList = () => (
  <ul className="booklist-box">
    <Bookitem />
    <Bookitem />
    <Bookitem />
  </ul>
);

export default BookList;
