import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactForm(state = initialState.message, action) {
  switch (action.type) {
    case types.FORM_RESET:
      return initialState.message;
    case types.FORM_SUBMIT_SUCCESS:
      // return Object.assign({}, state.message, action.message);
      return action.message;
    default:
      return state;
  }
}
