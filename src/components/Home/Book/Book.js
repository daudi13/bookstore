/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';
import Progress from '../../progress/progress';

const Book = ({ book, chapter, progress }) => {
  const dispatch = useDispatch();

  const handleDelete = () => (
    dispatch(removeBook(book.item_id))
  );

  return (
    <li className="bookItem">
      <ul className="bookItems-secs">
        <li className="bookDetails">
          <ul className="books">
            <li className="genre">{book.category}</li>
            <li className="booktitle" title={book.title}>{book.title}</li>
            <li className="bookAuthor">{book.author}</li>
          </ul>
          <ul className="actionButtons">
            <li><button type="button">Comments</button></li>
            <hr />
            <li><button type="button" onClick={handleDelete}>Remove</button></li>
            <hr />
            <li><button type="button">Edit</button></li>
          </ul>
        </li>
        <li className="update-sec">
          <ul>
            <li className="update-secInner">
              <Progress chapter={chapter} />
              <ul className="percentage">
                <li className="number">{`${chapter}%`}</li>
                <li>Complete</li>
              </ul>
            </li>
          </ul>
        </li>
        <span className="line" />
        <li className="chapter-sec">
          <ul className="chapter-secInner">
            <li className="title">CURRENT CHAPTER</li>
            <li>
              Chapter
              {' '}
              <span className="chapter">{progress}</span>
            </li>
            <li><button type="button">UPDATE PROGRESS</button></li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

Book.protoTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
};

export default Book;
