import fetch from 'isomorphic-fetch';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    console.log(error)
    throw error;
  }
};
// const parseJSON = (response) => response.json();

class Api {
  static saveMessage(message) {
    return fetch('/api/v1/mail/gmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(message),
    })
    .then(checkStatus)
    .catch(err => console.log('error', err));
  }
}
export default Api;
