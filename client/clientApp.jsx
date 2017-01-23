import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store';
import './public/styles/shared.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('client', store.getState())
    return (
      <Provider store={store} key="provider">
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default App;
