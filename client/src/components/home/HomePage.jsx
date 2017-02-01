import React, { PropTypes } from 'react';
import About from '../about/About';
import Services from '../services/Services';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <About />
        {/* <Services /> */}
      </div>
    );
  }
}

export default HomePage;
