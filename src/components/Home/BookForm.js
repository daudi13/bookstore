/* eslint-disable react/jsx-props-no-spreading */
import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../../redux/books/bookSlice';
import './BookForm.css';

const BookForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user.user);
  const { id } = currentUser;

  
  const onSubmit = async (data) => {
    const meta = {id, data};
    dispatch(postBook(meta));
    document.querySelectorAll('input').value = '';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h3>Add New Books</h3>
      <div className="form-container">
        <label htmlFor="book-title">
          <input
            type="text"
            htmlFor="book-title"
            placeholder="book title"
            className="input"
            {...register('title', { required: true, minLength: 2 })}
          />
        </label>
        <label htmlFor="book-author">
          <input
            type="text"
            htmlFor="book-book-author"
            placeholder="book authour"
            className="input"
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
        <label htmlFor="total-chapters">
          <input
            type="number"
            htmlFor="total-chaper"
            placeholder="Enter total chapters"
            className="input"
            {...register('total_chapters', { required: true, placeholder: 'book author', minLength: 2 })}
          />
        </label>
        <label htmlFor="current_chapter">
          <input
            type="number"
            htmlFor="current_chapter"
            placeholder="Enter current chapter"
            className="input"
            {...register('current_chapter', { required: true, placeholder: 'book author', minLength: 2 })}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
