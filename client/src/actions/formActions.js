import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import messageApi from '../api/messageApi';

import store from '../../store';

export function messageSuccess(message) {
  return { type: types.FORM_SUBMIT_SUCCESS, message };
}

export function resetForm() {
  return { type: types.FORM_RESET };
}

export function saveMessage(message) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    console.log('before ajax', store.getState())
    return messageApi.saveMessage(message)
    .then((response) => {
      console.log('message', response)
      dispatch(messageSuccess(message));
      console.log('message sent', store.getState())
      dispatch(resetForm());
      console.log('form reset', store.getState())
    }).catch((error) => {
      console.log('error', error);
      dispatch(ajaxCallError(error));
      throw (error);
    });
      
  }
}
