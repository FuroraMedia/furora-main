import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

// const propTypes = {
//   children: PropTypes.object.isRequired,
// };

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    // };
  }
  render() {
    //const children = this.props.children;
    return (
      <div className="o-wrapper c-about">
        <div className="o-layout">
          <div className="o-layout__item u-1/1">
            <div className="o-block">
              <h2>Who are we?</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// HomePage.propTypes = propTypes;
export default HomePage;
