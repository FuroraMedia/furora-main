
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import Layout from './src/components/Layout';
import Store from './Store';
import Routes from './Routes';

const propTypes = {
  isServerRoute: PropTypes.bool.isRequired,
  reqUrl: PropTypes.string,
  context: PropTypes.object,
};

const defaultProps = {
  reqUrl: '',
  context: {},
};

if (process.env.BROWSER) {
  require('./public/styles/shared.scss');
}

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
