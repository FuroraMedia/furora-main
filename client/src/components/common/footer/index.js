// @flow
import React from 'react';

const currentYear = (new Date()).getFullYear();
const Footer = () => (
  <footer className="c-footer">
    <div className="o-wrapper">
      <div className="o-layout">
        <div className="o-layout__item u-1/1">
          <small className="o-block c-footer__copy u-padding">
            &copy; Furora Media Ltd {currentYear}. - All Rights Reserved
          </small>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
