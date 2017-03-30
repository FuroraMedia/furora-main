import { combineReducers } from 'redux';
import formValues from './formReducer';
import formValidation from './formValidationReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  formValues,
  formValidation,
  ajaxCallsInProgress,
});

export default rootReducer;
