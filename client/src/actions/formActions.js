import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function createMessage(message) {
  return { type: types.FORM_SUBMIT_VALUE, message };
}

export function reset() {
  return dispatch => dispatch({
    type: types.FORM_RESET,
  });
}


export function saveMessage(message) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
