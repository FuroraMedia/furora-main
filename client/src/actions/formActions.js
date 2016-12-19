import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import messageApi from '../api/messageApi';

export function createMessage(message) {
  return { type: types.FORM_SUBMIT_VALUE, message };
}

export function reset() {
  //console.log('action reset')
  return dispatch => dispatch({ type: types.FORM_RESET });
}

export function saveMessage(message) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return messageApi.saveMessage(message)
    .then(message => {
      dispatch(createMessage(message));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
