const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const ReactRouter = require('react-router');
// const match = ReactRouter.match;
// const RouterContext = ReactRouter.RouterContext;
// const ReactRedux = require('react-redux');
// const Provider = ReactRedux.Provider;
// const Store = require('./js/Store.jsx')
// const store = Store.store;

module.exports = (app) => {
  app.use(favicon(path.join(__dirname, '../favicon.ico')));
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

  app.use('/static', express.static(path.join(__dirname, '../../client/dist')));

// app.use((req, res) => {
  //   match({
  //     routes: Routes(),
  //     location: req.url
  //   }, (error, redirectLocation, renderProps) => {
  //     if (error) {
  //       res.status(500).send(error.message)
  //     } else if (redirectLocation) {
  //       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  //     } else if (renderProps) {
  //       const body = ReactDOMServer.renderToString(React.createElement(Provider, {
  //         store
  //       }, React.createElement(RouterContext, renderProps)))
  //       res.status(200).send(template({body}))
  //     } else {
  //       res.status(404).send('Not found')
  //     }
  //   })
  // })
};
