import React, { PropTypes } from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import ContactSection from './contact/ContactSection';

const propTypes = {
  children: PropTypes.array.isRequired,
};

const Layout = props => (
  <div className="o-container">
    <Header />
    <main>
      {props.children}
    </main>
    <ContactSection />
    <Footer />
  </div>
);

Layout.propTypes = propTypes;

export default Layout;