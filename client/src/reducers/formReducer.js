import * as types from '../actions/actionTypes';
import initialState from './initialState';

console.log(initialState.formValues);

export const contactForm = (state = initialState.formValues, action) => {
  switch (action.type) {
    case types.FORM_SUBMIT_VALUE:
      return [...state,
        Object.assign({}, action.message),
      ];
    case types.FORM_RESET:
      return state;
    default:
      return state;
  }
};
