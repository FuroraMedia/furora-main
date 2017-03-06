import { combineReducers } from 'redux';
import formValues from './formReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  formValues,
  ajaxCallsInProgress,
});

export default rootReducer;
