import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const contactForm = (state = initialState.formValues, action) => {
  switch (action.type) {
    case types.FORM_SUBMIT_VALUE:
      return [...state,
        Object.assign({}, action.message),
      ];
    case types.FORM_RESET:
      state = undefined;
      break;
    default:
      return state;
  }
};
