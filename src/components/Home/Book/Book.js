/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { deleteBook, getBooks, updateBook } from '../../../redux/books/bookSlice';
import Progress from '../../progress/progress';

const Book = ({ book, percent }) => {
  const [count, setCount] = useState(+(book.current_chapter) + 1);
  const myToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const decodedToken = decodeToken(myToken);
  const userId = +(decodedToken.sub);
  const bookId = book.id;
  useEffect(() => {
    dispatch(getBooks(userId));
  }, []);

  const handleUpdate = async () => {
    setCount((count) => count + 1);
    console.log(count);
    const body = {
      title: book.title,
      author: book.author,
      genre: book.genre,
      current_chapter: `${count}`,
      total_chapters: book.total_chapters,
      bookId,
    };
    const meta = { body, userId };
    dispatch(updateBook(meta));
    dispatch(getBooks());
  };

  const handleDelete = () => {
    const data = { userId, bookId };
    dispatch(deleteBook(data));
  };

  return (
    <li className="bookItem">
      <ul className="bookItems-secs">
        <li className="bookDetails">
          <ul className="books">
            <li className="genre">{book.genre}</li>
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

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Book;
