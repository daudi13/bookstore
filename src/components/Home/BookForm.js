/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/bookSlice';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [totalChapters, setTotalChapters] = useState();
  const [currentChapter, setCurrentChapter] = useState();

  const myToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const decodedToken = decodeToken(myToken);
  const id = +(decodedToken.sub);

  // const onSubmit = async (data) => {
  //   const meta = { id, data };
  //   dispatch(postBook(meta));
  //   document.querySelectorAll('input').value = '';
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      genre,
      current_chapter: currentChapter,
      total_chapters: totalChapters,
    };
    const meta = { data, id };
    dispatch(postBook(meta));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Add New Books</h3>
      <div className="form-container">
        <label htmlFor="book-title">
          <input
            type="text"
            htmlFor="book-title"
            placeholder="book title"
            className="input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label htmlFor="book-author">
          <input
            type="text"
            htmlFor="book-book-author"
            placeholder="book authour"
            className="input"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>
        <label htmlFor="genre">
          <select
            id="books genre"
            className="category"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            required
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
            value={totalChapters}
            onChange={(e) => setTotalChapters(e.target.value)}
            required
          />
        </label>
        <label htmlFor="current_chapter">
          <input
            type="number"
            htmlFor="current_chapter"
            placeholder="Enter current chapter"
            className="input"
            value={currentChapter}
            onChange={(e) => setCurrentChapter(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
