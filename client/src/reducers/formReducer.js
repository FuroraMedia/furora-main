import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactForm(state = initialState.formValues, action) {
  switch (action.type) {
    case types.FORM_SUBMIT_VALUE:
      return [...state,
        Object.assign({}, action.message),
      ];
    default:
      return state;
  }
}
