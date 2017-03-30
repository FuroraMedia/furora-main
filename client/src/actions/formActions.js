import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import messageApi from '../api/messageApi';

export function formSubmit(message) {
  return { type: types.FORM_SUBMIT, message };
}
export function formSubmitSuccess(text) {
  return { type: types.FORM_SUBMIT_SUCCESS, text };
}

export function formSubmitFail(text) {
  return { type: types.FORM_SUBMIT_FAIL, text };
}

export function missingFields(text) {
  return { type: types.FORM_SUBMIT_MISSING_FIELDS, text };
}

export function resetForm() {
  return { type: types.FORM_RESET };
}

export function requiredFields(text) {
  return function save(dispatch) {
    dispatch(missingFields(text));
  };
}

export function saveMessage(message) {
  return function save(dispatch) {
    dispatch(beginAjaxCall());
    dispatch(formSubmit(message));
    return messageApi.saveMessage(message)
    .then((res) => {
      dispatch(formSubmitSuccess(res.message));
      dispatch(resetForm());
    }).catch((err) => {
      // console.log('error', err)
      dispatch(formSubmitFail(err.message));
      dispatch(ajaxCallError(err));
      throw (err);
    });
  };
}
