import fetch from 'isomorphic-fetch';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = response => response.json();

class Api {
  static saveMessage(message) {
    return fetch('/api/v1/mail/', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    })
    .then(checkStatus)
    .then(parseJSON);
  }
}
export default Api;
