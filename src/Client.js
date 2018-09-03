function search(query, callback) {
  return fetch(`http://localhost:50813/api/products?searchTerm=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

function getDetail(query, callback) {
  return fetch(`http://localhost:50813/api/products/${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`Error: ${response.statusText}`);
    console.log(error); // eslint-disable-line no-console
    error.status = response.statusText;
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, getDetail };
export default Client;
