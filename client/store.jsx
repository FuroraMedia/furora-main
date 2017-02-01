import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/reducers';
// import createLogger from 'redux-logger';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// const middleware = [ thunk ];

  // if (process.env.NODE_ENV !== 'production') {
// middleware.push(createLogger());
// middleware.push(reduxImmutableStateInvariant());
// }

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
