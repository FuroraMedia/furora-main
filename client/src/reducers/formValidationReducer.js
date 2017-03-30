import * as types from '../actions/actionTypes';

const initialState = {
  show: false,
  submit: false,
  success: false,
  message: '',
};

export default function formValidation(state = initialState, action) {
  switch (action.type) {
    case types.FORM_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        show: true,
        submit: true,
        success: true,
        message: action.text,
      });
    case types.FORM_SUBMIT_FAIL:
      return Object.assign({}, state, {
        show: true,
        submit: true,
        success: false,
        message: action.text,
      });
    case types.FORM_SUBMIT_MISSING_FIELDS:
      return Object.assign({}, state, {
        show: true,
        submit: false,
        success: false,
        message: action.text,
      });
    default:
      return state;
  }
}
