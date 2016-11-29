import * as types from './actionTypes';

export function reset() {
  return dispatch => dispatch({
    type: types.FORM_RESET,
  });
}
