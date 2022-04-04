import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  // eslint-disable-next-line react/prop-types
  title, author, genre, complete, chapter,
}) => (
  <li className="bookItem">
    <ul className="bookItems-secs">
      <li className="bookDetails">
        <ul className="books">
          <li className="genre">{genre}</li>
          <li className="booktitle">{title}</li>
          <li className="bookAuthor">{author}</li>
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
              <li className="number">{complete}</li>
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
            <span className="chapter">{chapter}</span>
          </li>
          <li><button type="button">UPDATE PROGRESS</button></li>
        </ul>
      </li>
    </ul>
  </li>
);

Book.protoTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
};

export default Book;
