import React, { PropTypes } from 'react';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';

const propTypes = {
  children: PropTypes.object.isRequired,
};

class App extends React.Component {
  render() {
    return (
      <div className="o-wrapper">
        <Header />
        {/* <main>
          <div className="container">
            {this.props.children}
          </div>
        </main> */}
        <Footer />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
