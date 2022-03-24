import React from 'react';

const BookForm = () => {
  <form>
    <h3>Add New Books</h3>
    <div>
      <label htmlFor="book-title">
        <input type="text" htmlFor="book-title" placeholder="book title" />
      </label>
      <label htmlFor="categories">
        <input type="select" htmlFor="book-title" placeholder="book title" />
        <select>
          <option>Action</option>
          <option>Fiction</option>
          <option>Non-fiction</option>
          <option>Self-Help</option>
        </select>
      </label>
      <button type="submit">Add Book</button>
    </div>
  </form>;
};

export default BookForm;
