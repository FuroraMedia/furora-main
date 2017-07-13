
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import Layout from './src/components/Layout';
import Store from './store';
import Routes from './routes';

const propTypes = {
  isServerRoute: PropTypes.bool.isRequired,
  reqUrl: PropTypes.string,
  context: PropTypes.object,
};

const defaultProps = {
  reqUrl: '',
  context: {},
};

/* eslint-disable global-require */
if (process.env.BROWSER) {
  require('./public/styles/shared.scss');
}
/* eslint-enable global-require */

const App = ({
  isServerRoute,
  reqUrl,
  context,
}) => (
  <Provider store={Store} key="provider">
    <Layout>
      { isServerRoute &&
        <StaticRouter location={reqUrl} context={context}>
          <Routes />
        </StaticRouter>
      }
      { !isServerRoute &&
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      }
    </Layout>
  </Provider>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;
export default App;
