import { combineReducers } from 'redux';
import message from './formReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const appReducer = combineReducers({
  message,
  ajaxCallsInProgress,
});

const rootReducer = (state, action) => {
  if (action.type === 'FORM_RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
