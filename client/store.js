import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from "./src/reducers";

// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
//   middleware.push(reduxImmutableStateInvariant());
// }

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // (applyMiddleware(...middleware))
);

export default store;
