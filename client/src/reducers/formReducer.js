import * as types from '../actions/actionTypes';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export default function formValues(state = initialState, action) {
  switch (action.type) {
    case types.FORM_RESET:
      return initialState;
    case types.FORM_SUBMIT:
      return {
        ...state, ...action.payload,
      };
    default:
      return state;
  }
}
