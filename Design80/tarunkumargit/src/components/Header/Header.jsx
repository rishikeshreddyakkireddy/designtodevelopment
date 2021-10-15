import React from 'react';
import './_header.scss';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <header className="navbar">
        <nav className="navbar__left">
          <div className="navbar__left__menu">
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
            <h5>Menu</h5>
          </div>
          <div className="navbar__left__search">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>
        </nav>

        <nav className="navbar__center">
          <div className="navbar__center__left">
            <h5>About Us</h5>
            <h5>Philosophy</h5>
          </div>

          <div className="navbar__center__center">
            <div className="img_container">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="navbar__center__right">
            <h5>Blog</h5>
            <h5>All Shop</h5>
          </div>
        </nav>

        <nav className="navbar__right">
          <div className="navbar__right__cart">
            <h5>Cart</h5>
            <i className="ri-shopping-cart-line"></i>
          </div>
          <div className="navbar__right__login">
            <h5>Login</h5>
            <i className="ri-user-3-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
