import React from 'react';
import './Bookitem.css';

const BookList = () => (
  <li className="bookItem">
    <ul className="bookItems-secs">
      <li className="bookDetails">
        <ul className="books">
          <li className="genre">Action</li>
          <li className="booktitle">The Hunger Games</li>
          <li className="bookAuthor">Suzanne Collins</li>
        </ul>
        <ul className="actionButtons">
          <li><button type="button">Comments</button></li>
          <li><button type="button">Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </li>
      <li className="update-sec">
        <ul>
          <li className="update-secInner">
            <span className="circle" />
            <ul className="percentage">
              <li className="number">64%</li>
              <li>Complete</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="chapter-sec">
        <ul className="chapter-secInner">
          <li className="title">CURRENT CHAPTER</li>
          <li>
            Chapter
            {' '}
            <span className="chapter">17</span>
          </li>
          <li><button type="button">UPDATE PROGRESS</button></li>
        </ul>
      </li>
    </ul>
  </li>
);

export default BookList;
