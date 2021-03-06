import React from 'react';
// import { Link } from 'react-router';
import Arrows from './Arrows';
import Logo from './Logo';
import SocialMedia from '../socialMedia';

const Header = () => (
  <header className="c-header c-header--dark">
    <div className="o-wrapper c-header__container">
      <div className="o-layout">
        <nav className="o-layout__item u-1/1 c-nav">
          <a
            href="/"
            className="c-nav__home-link"
            title="Furora Media Ltd"
          >
            <Logo />
          </a>

          <SocialMedia />
        </nav>
        <div className="o-layout__item u-1/1">
          <div className="o-flag">
            <div className="o-flag__body c-header__headline">
              <h1 className="c-header__title">Front End Development Consultancy
                <br />
                Based in Essex / London
              </h1>
            </div>
          </div>
        </div>
        <Arrows />
      </div>
    </div>
  </header>
);

export default Header;
