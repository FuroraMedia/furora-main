import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

import fetch from 'isomorphic-fetch';

export function createMessage(message) {
  return {type: types.FORM_SUBMIT_VALUE, message};
}

export function reset() {
  return dispatch => dispatch({type: types.FORM_RESET});
}


export function saveMessage(message) {
  return function(dispatch, getState) {
  
    console.log(message)
    dispatch(beginAjaxCall());
    fetch('/api/v1/mail/gmail', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
Accept: 'application/json'
        // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: JSON.stringify(message),
    }).then(message => {
      dispatch(createMessage(message));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

  // return messageApi.saveMessage(message).then(message => {
  //   dispatch(createMessage(message));
  // }).catch(error => {
  //   dispatch(ajaxCallError(error));
  //   throw(error);
  // });
  // };
  // }
