import React from 'react';
import Bookitem from './Bookitem';
import './BookList.css';

const BookList = () => (
  <ul className="booklist-box">
    <Bookitem title="In the Heart of the Sea" author="Mark Twain" genre="Fantacy" complete="55%" chapter="12" />
    <Bookitem title="Hunger Games" author="Suzzanne Collins" genre="Action" complete="93%" chapter="33" />
    <Bookitem title="Bourne Legacy" author="Robert Lundlum" genre="Suspense" complete="3%" chapter="27" />
  </ul>
);

export default BookList;
