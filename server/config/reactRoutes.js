const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const renderToString = ReactDOMServer.renderToString;
const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const Store = require('../../client/src/store/configureStore');
const store = Store.store;

const _ = require('lodash');
const fs = require('fs');
const baseTemplate = fs.readFileSync(path.join(__dirname, '../index.html'));
const template = _.template(baseTemplate);
const Routes = require('../../client/routes.jsx');

module.exports = (app) => {
  app.use((req, res) => {
    match({ routes: Routes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const body = renderToString(<RouterContext {...props} />);
        res.status(200).send(template({ body }));
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};
