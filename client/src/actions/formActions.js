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
  return { type: types.FORM_SUBMIT_MISSING, text };
}

export function resetForm() {
  return { type: types.FORM_RESET };
}

export function formValidationFields() {
  return function save(dispatch) {
    dispatch(missingFields());
  };
}

export function saveMessage(message) {
  return function save(dispatch) {
    dispatch(beginAjaxCall());
    dispatch(formSubmit(message));
    return messageApi.saveMessage(message)
    .then((res) => {
      console.log('res', res)
      dispatch(formSubmitSuccess(res));
      dispatch(resetForm());
    }).catch((err) => {
      console.log('error', err)
      dispatch(formSubmitFail(err));
      dispatch(ajaxCallError(err));
      throw (err);
    });
  };
}
