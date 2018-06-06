import axios from 'axios';

export function getAllData() {
  // console.log('Username given: ' + username + 'Passowrd: gievm: ' + password);
  const request = axios.get('https://raw.githubusercontent.com/zonayedpca/zonayedpca.github.io/master/Me/zonayed.json').catch(function (error) {
    if (error.response) {
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    }
  });

  return {
    type: 'All_DATA',
    payload: request
  }
}
