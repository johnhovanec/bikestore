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

function setCookie(name, value, duration) {
    var expires = "";
    if (duration) {
        var date = new Date();
        date.setTime(date.getTime() + (duration * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var targetCookie = name + "=";
    var documentCookies = document.cookie.split(';');
    for(var i = 0; i < documentCookies.length; i++) {
        var cookie = documentCookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(targetCookie) === 0) 
          return cookie.substring(targetCookie.length, cookie.length);
    }
    return "Error: unable to get cookie";
}

function deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

const Client = { search, getDetail, setCookie, getCookie, deleteCookie };
export default Client;
