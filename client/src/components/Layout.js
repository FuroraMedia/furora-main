import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/header';
import Footer from './common/footer';
import ContactSection from './contact/formSection';

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
