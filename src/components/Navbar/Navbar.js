import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div className="navBar">
      <nav>
        <div className="logo">BookStore &reg;</div>
        <ul className="nav">
          <li><NavLink className="link-btn" to="/">Home</NavLink></li>
          <hr />
          <li><NavLink className="link-btn" to="Categories">Category</NavLink></li>
        </ul>
        <div className="userIcon">.</div>
      </nav>
    </div>
  </>
);

export default Navbar;
