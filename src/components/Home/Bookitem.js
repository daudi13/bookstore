import React from 'react';

const BookList = () => (
  <li className="bookItem">
    <ul className="bookItems-secs">
      <li className="bookDetails">
        <ul className="books">
          <li>Action</li>
          <li>The Hunger Games</li>
          <li>Suzanne Collins</li>
        </ul>
        <ul className="actionButtons">
          <li><button type="button">Comments</button></li>
          <li><button type="button">Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </li>
      <li className="update-sec">
        <ul>
          <li>
            <span className="circle" />
            <ul className="percentage">
              <li>64%</li>
              <li>Complete</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="chapter-sec">
        <ul>
          <li>CURRENT CHAPTER</li>
          <li>Chapter 17</li>
          <li><button type="button">UPDATE PROGRESS</button></li>
        </ul>
      </li>
    </ul>
  </li>
);

export default BookList;
