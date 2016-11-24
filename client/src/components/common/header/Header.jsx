import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';

import SocialMedia from '../socialMedia/SocialMedia';

const Header = () => (
  <header className="c-header c-header--dark">
    <div className="c-header__container">
      <nav className="c-nav">

        <Link to="/" className="c-nav__home-link">
          <Logo />
        </Link>
        <SocialMedia />
      </nav>

      <h1 className="c-header__title">Front End Developement Consultancy
        <br />
        Based in Essex / London</h1>
    </div>
  </header>
);

export default Header;
