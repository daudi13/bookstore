import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logged }) => {
  console.log(logged);
  return (
    <>
      <div className="navBar">
        <nav>
          <div className="logo">BookStore CMS</div>
          {
            logged
          && (
          <ul className="nav">
            <li><NavLink className="link-btn" to="/">Home</NavLink></li>
            <li><NavLink className="link-btn" to="Categories">Category</NavLink></li>
          </ul>
          )
        }
          <img src="./images/login.png" alt="user icon" className="userIcon" />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
