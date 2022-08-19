/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/bookSlice';
import './BookForm.css';

const BookForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(postBook(book));
  //   document.querySelector('.one').value = '';
  //   document.querySelector('.two').value = '';
  // };

  const onSubmit = async (data, userId) => {
    dispatch(postBook(data, userId));
    document.querySelector('.one').value = '';
    document.querySelector('.two').value = '';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Add New Books</h3>
      <div className="form-container">
        <label htmlFor="book-title">
          <input
            type="text"
            htmlFor="book-title"
            className="input one"
            {...register('title', { required: true, placeholder: 'Add book title', minLength: 2 })}
          />
        </label>
        <label htmlFor="book-author">
          <input
            type="text"
            htmlFor="book-book-author"
            placeholder="book authour"
            className="input two"
            {...register('author', { required: true, placeholder: 'book author', minLength: 2 })}
          />
        </label>
        <label htmlFor="genre">
          <select
            id="books genre"
            className="category"
            {...register('genre', { required: true, placeholder: 'add book genre' })}
          >
            <option>genre</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Self-Help</option>
            <option>financial</option>
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
