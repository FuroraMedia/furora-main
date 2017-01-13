import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactForm(state = initialState.formValues, action) {
  switch (action.type) {
    case types.FORM_RESET:
      return initialState.formValues;
    case types.FORM_SUBMIT_SUCCESS:
      return Object.assign({}, action.message);
    default:
      return state;
  }
}
