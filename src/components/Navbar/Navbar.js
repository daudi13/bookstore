import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div className="navBar">
      <div className="logo">BookStore CMS</div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="Categories">Category</Link></li>
      </ul>
      <div className="userIcon">.</div>
    </div>
  </>
);

export default Navbar;
