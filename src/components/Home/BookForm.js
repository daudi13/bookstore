import React from 'react';
import './BookForm.css';

const BookForm = () => (
  <form>
    <h3>Add New Books</h3>
    <div className="form-container">
      <label htmlFor="book-title">
        <input type="text" htmlFor="book-title" placeholder="book title" className="input" />
      </label>
      <label htmlFor="book-author">
        <input type="text" htmlFor="book-book-author" placeholder="book authour" className="input" />
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
      <button type="submit">Add Book</button>
    </div>
  </form>
);

export default BookForm;
