import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import messageApi from '../api/messageApi';

export function messageSuccess(message) {
  return { type: types.FORM_SUBMIT_SUCCESS, message };
}

export function resetForm() {
  return { type: types.FORM_RESET };
}

export function saveMessage(message) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return messageApi.saveMessage(message)
    .then(() => {
      dispatch(messageSuccess(message));
      dispatch(resetForm());
    }).catch((error) => {
      console.log('error', error);
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
