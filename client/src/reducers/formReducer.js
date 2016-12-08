import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const contactForm = (state = [], action) => {
  switch (action.type) {
    case types.FORM_SUBMIT_VALUE:
      return [...state,
        Object.assign({}, action.message),
      ];
    case types.FORM_RESET:
      return initialState.formValues;

    default:
      return state;
  }
};
