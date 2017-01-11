import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, reduxImmutableStateInvariant()));

export default store;
