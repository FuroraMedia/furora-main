import React from 'react';
// import { Link, IndexLink } from 'react-router';
import Logo from './Logo';

const Header = () => (
  <header className="c-header c-header--dark">
    <div className="c-header__container">
      <nav className="c-nav">

        <a href="/" className="c-nav__home-link">
          <Logo />
        </a>

        <ul className="c-social-media c-social-media--light">
          <li className="c-social-media__item">
            <a href="https://twitter.com/FuroraMedia" target="_blank" className="c-social-media__link" rel="noopener noreferrer">
              <svg className="c-social-media__icon icon icon--twitter" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
              </svg>
            </a>
          </li>
          <li className="c-social-media__item">
            <a href="https://www.linkedin.com/company/furora-media-ltd" target="_blank" className="c-social-media__link" rel="noopener noreferrer">
              <svg className="c-social-media__icon icon icon--linkedIn" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="c-header__title">Front End Developement Consultancy
        <br />
        Based in Essex / London</h1>
    </div>
  </header>
);

export default Header;
