import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logged }) => {
  const navigate = useNavigate();
  const { state } = useLocation()
  console.log(logged);
  const handleLogOut = () => {
    localStorage.clear();
    navigate(state?.path || '/');

  };
  return (
    <>
      <div className="navBar">
        <nav>
          <div className="logo">BookStore CMS</div>
          {
            logged
          && (
          <>
            <ul className="nav">
              <li><NavLink className="link-btn" to="/App">Home</NavLink></li>
              <li><NavLink className="link-btn" to="/Categories">Category</NavLink></li>
            </ul>
            <button className="userIcon" onClick={handleLogOut}>Log Out</button>
          </>
          )
        }
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Navbar;
