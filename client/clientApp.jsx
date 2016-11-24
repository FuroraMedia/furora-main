import React from 'react';

// import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './public/styles/shared.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

export default App;
