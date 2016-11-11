/* eslint-disable no-console */

const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const ReactRouter = require('react-router');
// const match = ReactRouter.match;
// const RouterContext = ReactRouter.RouterContext;
// const ReactRedux = require('react-redux');
// const Provider = ReactRedux.Provider;
// const Store = require('./js/Store.jsx')
// const store = Store.store;
const compression = require('compression');
const path = require('path');

const port = 80;

const app = express();

app.use(compression());
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});
// app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use('/static', express.static('../client/public/'));

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


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', port);
  }
});
