/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/bookSlice';
import './BookForm.css';

const BookForm = ({ closeModal }) => {
  const { handleSubmit, register } = useForm();

  const myToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const decodedToken = decodeToken(myToken);
  const id = +(decodedToken.sub);

  const onSubmit = async (data) => {
    const meta = { data, id };
    dispatch(postBook(meta));
    closeModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h3>Add New Books</h3>
        <div className="form-container">
          <label htmlFor="book-title">
            <input
              type="text"
              htmlFor="book-title"
              placeholder="book title"
              className="input"
              {...register('title', { required: true, minlength: 2 })}
            />
          </label>
          <label htmlFor="book-author">
            <input
              type="text"
              htmlFor="book-book-author"
              placeholder="book author"
              className="input"
              {...register('author', { required: true, minlength: 2 })}
            />
          </label>
          <label htmlFor="genre">
            <input
              id="books genre"
              placeholder="genre"
              className="input"
              {...register('genre', { required: true, minlength: 2 })}
            />
          </label>
          <label htmlFor="total-chapters">
            <input
              type="number"
              htmlFor="total-chaper"
              placeholder="Enter total chapters"
              className="input"
              {...register('total_chapters', { required: true })}
            />
          </label>
          <label htmlFor="current_chapter">
            <input
              type="number"
              htmlFor="current_chapter"
              placeholder="Enter current chapter"
              className="input"
              {...register('current_chapter', { required: true })}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>Add Book</button>
        </div>
      </form>
      <div className="overlay" onClick={() => closeModal(false)} onKeyDown={() => closeModal(false)} role="button" tabIndex={0} aria-label="cancel form" />
    </>
  );
};

BookForm.propTypes = {
  closeModal: PropTypes.bool.isRequired,
};

export default BookForm;
