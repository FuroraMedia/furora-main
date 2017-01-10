import { combineReducers } from 'redux';
import message from './formReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  message,
  ajaxCallsInProgress,
});

export default rootReducer;
