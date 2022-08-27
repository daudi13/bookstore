import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHamburger } from 'react-icons/fa';

const Navbar = ({ logged }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
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
          <div className="nav-bar">
            <ul className="desk nav">
              <li><NavLink className="link-btn" to="/App">Home</NavLink></li>
              <li><NavLink className="link-btn" to="/Categories">Category</NavLink></li>
            </ul>
            <button type="button" className="desk logout" onClick={handleLogOut}>Log Out</button>
            {
                menu && (
                <>
                  <ul className="nav">
                    <li><NavLink className="link-btn" to="/App">Home</NavLink></li>
                    <li><NavLink className="link-btn" to="/Categories">Category</NavLink></li>
                  </ul>
                  <button type="button" className="logout" onClick={handleLogOut}>Log Out</button>
                  <button type="button" className="toggle-menu" onClick={() => setMenu(false)}>X</button>
                </>
                )
            }
          </div>
          )
        }
          <button type="button" className="toggle-menu" aria-label="ham" onClick={() => setMenu(true)}><FaHamburger /></button>
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Navbar;
