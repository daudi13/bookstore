import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div className="navBar">
      <nav>
        <div className="logo">BookStore &reg;</div>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <hr />
          <li><Link to="Categories">Category</Link></li>
        </ul>
        <div className="userIcon">.</div>
      </nav>
    </div>
  </>
);

export default Navbar;
