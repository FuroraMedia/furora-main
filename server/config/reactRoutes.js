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


// const ClientApp = require('../../client/clientApp.jsx');
const Routes = require('../../client/routes.jsx');

console.log('template is', template);

module.exports = (app) => {
  
  function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href="/static/styles.css"/>
    <div id=app>${appHtml}</div>
    <script src="/static/bundle.js"></script>`
  }
  
  app.use((req, res) => {
    match({ routes: Routes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const body = renderToString(<RouterContext {...props} />)
        //res.send(renderPage(appHtml))
        res.status(200).send(template({ body }))
      } else {
        res.status(404).send('Not found graeme');
      }
    });
  });  
};
