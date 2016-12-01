import React, { PropTypes } from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';

import ContactSection from './contact/ContactSection';

const propTypes = {
  children: PropTypes.object.isRequired,
};

class Layout extends React.Component {
  render() {
    return (
      <div className="o-wrapper">
        <Header />
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = propTypes;
export default Layout;
