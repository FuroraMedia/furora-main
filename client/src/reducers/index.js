import { combineReducers } from 'redux';
import formValues from './formReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  formValues,
  ajaxCallsInProgress
});

// const rootReducer = (state, action) => {
//   if (action.type === 'FORM_RESET') {
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

export default rootReducer;
