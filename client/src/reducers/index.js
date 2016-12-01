import { combineReducers } from 'redux';
import { contactForm } from './formReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  contactForm,
  ajaxCallsInProgress,
});

export default rootReducer;
