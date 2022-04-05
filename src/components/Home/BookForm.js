import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addbook } from '../../redux/books/books';
import './BookForm.css';

const BookForm = () => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  console.log(book);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    return setBook((prevbook) => ({
      ...prevbook,
      id: uuid(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addbook(book));
  };

  return (
    <form>
      <h3>Add New Books</h3>
      <div className="form-container">
        <label htmlFor="book-title">
          <input
            type="text"
            htmlFor="book-title"
            placeholder="book title"
            className="input"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="book-author">
          <input
            type="text"
            htmlFor="book-book-author"
            placeholder="book authour"
            className="input"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="categories">
          <select id="books categories" className="category">
            <option>Categories</option>
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
