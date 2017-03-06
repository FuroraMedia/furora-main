import * as types from '../actions/actionTypes';

const initialState = {
  name: '', email: '', message: '', submitted: false,
};

export default function contactForm(state = initialState, action) {
  switch (action.type) {
    case types.FORM_RESET:
      return initialState;
    case types.FORM_SUBMIT_SUCCESS:
      return {
        ...state, ...action.payload,
      };
    default:
      return state;
  }
}
