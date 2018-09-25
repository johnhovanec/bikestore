function search(query, callback) {
  return fetch(`http://localhost:50813/api/products?searchTerm=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

function getProduct(query, callback) {
  return fetch(`http://localhost:50813/api/products/${query}`, {
    method: "GET",
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

function updateProductRating(query, callback) {
  var data = [{"op": "replace", "path": "/rating", "value": query}];
  var url = 'http://localhost:50813/api/products/1';
    let headers = new Headers({
      'Content-Type':'application/json; charset=utf-8;'
      ,'Accept':'*/*'
    });

    fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query),
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}


function getCartDetail(query, callback) {
  return fetch(`http://localhost:50813/api/shoppingcarts/${query}`, {
    method: "GET",
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

function updateCart(data, callback) {
  data = {
        "customerid": 12334,
        "carttimestamp": new Date()
        };
  return fetch(`http://localhost:50813/api/shoppingcartproducts/`, {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

function addToCart(data, callback) {
  var url = 'http://localhost:50813/api/shoppingcarts/';
    let headers = new Headers({
      'Content-Type':'application/json; charset=utf-8;'
      ,'Accept':'*/*'
    });

    // check for an existing cart with customerId
    let existingCustId = getCookie("customerId");
    debugger;
    let z = getCartDetail(existingCustId);
    if (!getCartDetail(existingCustId))
    {
      // to generate faux customerIds
      let date = new Date();
      let custId = Math.round(date.getTime() / 1000);
      setCookie("customerId", custId, 1);
      let data = {
        "customerid": custId,
        "carttimestamp": new Date()
        };
      debugger;
      console.log("ready to send fetch...")

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
    else
    {
      console.log("Cart already exists for Id: " + existingCustId);
      updateCart(data);
    }
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

const Client = { search, getProduct, updateProductRating, addToCart, setCookie, getCookie, deleteCookie };
export default Client;
