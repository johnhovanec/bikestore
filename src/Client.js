// Retrieve products that match the searchTerm entered
// GET api/products/
function search(query, callback) {
  return fetch(`http://localhost:50813/api/products?searchTerm=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}

// Retrieve a single product
// GET api/products/{productId}
function getProduct(query, callback) {
  return fetch(`http://localhost:50813/api/products/${query}`, {
    method: "GET",
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}


// Retrieve the shopping cart
// GET api/shoppingcarts/getsessionuser/${sessionId}
function getShoppingCart(query, callback) {
  return fetch(`http://localhost:50813/api/shoppingcarts/session?sessionId=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch((error) => console.log(error.message));
}


// Update a product rating using PATCH
// PATCH api/products/1
function updateProductRating(id, rating, callback) {
  var data = [{"op": "replace", "path": "/rating", "value": rating}];
  var url = 'http://localhost:50813/api/products/' + id;
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
      body: JSON.stringify(data),
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}


// Add a product -- Admin only
// Add api/products/
function addProduct(data, callback) {
  var url = 'http://localhost:50813/api/products/';
  let headers = new Headers({
    'Content-Type':'application/json; charset=utf-8;'
    ,'Accept':'*/*'
  });

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(res => res.text())
  .catch(error => handleAddProductError(error))
  .then(response => handleAddProductSuccess(response));
}

function handleAddProductSuccess(response) {
  if (response) {
    console.log("Product was successfully added: ", response);
    window.alert("Product was successfully added.");
  }
}

function handleAddProductError(response) {
  if (response) {
    console.log("Error adding product: ", response);
    window.alert("Error adding product: ");
  }
}

// Update a product -- Admin only
// PUT api/products/1
function updateProduct(id, data, callback) {
  var url = 'http://localhost:50813/api/products/' + id;
  let headers = new Headers({
    'Content-Type':'application/json; charset=utf-8;'
    ,'Accept':'*/*'
  });

  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(res => res.text())
  .catch(error => handleProductUpdateError(error))
  .then(response => handleProductUpdateSuccess(response));
}

function handleProductUpdateError(response) {
  if (response) {
    console.log("Error updating product: ", response);
    window.alert("Error updating product: ");
  }
}

// Note: a successful put returns a 204 with No Content in the response
function handleProductUpdateSuccess(response) {
  if (!response) {
    console.log("Updating product: ");
    window.alert("Updating product");
  }
  else
    window.alert("Error in updating product:", response);
}

// Delete a product -- Admin only
// DELETE api/products/1
function deleteProduct(id) {
  const url = 'http://localhost:50813/api/products/' + id;
  return fetch(url, {
      method: "DELETE", 
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(id), // body data type must match "Content-Type" header
  })
  .then((resp) => resp.json())
    .then(function(data) {
      console.log("In delete >>> data: " + data.manufacturer + " " + data.model);
      alert(data.manufacturer + " " + data.model + " successfully deleted");
      window.history.go(-2);
      window.location.reload(true);
      return data;
    })
    .catch(function(error) {
      console.log("DELETE ERR: " + error);
    });
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

function addProductToCart(data) {
  console.log("Calling addProductToCart: " + data);
  return fetch(`http://localhost:50813/api/shoppingcarts/`, {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.text())
      .catch(error => alert("ERROR Adding product to cart. Please try again: " + error))
      .then(response => handleAddToCartSuccess(response));
}

function deleteProductFromCart(id) {
  const url = "http://localhost:50813/api/shoppingcartproducts/" + id;
  return fetch(url, {
      method: "DELETE", 
      mode: "cors", 
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(id), 
  })
  .then((resp) => resp.json())
    .then(function(data) {
      console.log("In delete product from cart >>> id: " + data.model);
      alert("Product deleted from cart");
      window.location.reload(true);
      return data;
    })
    .catch(function(error) {
      console.log("DELETE From CART ERR: " + error);
    });
}


function handleAddToCartSuccess(response) {
  alert("Success in adding product to cart");
  window.location.href = "http://localhost:3000/products";
}

// Helper method to check the AJAX response
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`Error: ${response.statusText}`);
    console.log(error); 
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
    return false;
}

function deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function login(username, password) {
  console.log("Calling Client login with: " + username + " " + password);
  // POST user credentials to API
  //Create a unique sessionId for the session
  const uuidv1 = require('uuid/v1');
  const sessionId = uuidv1();
  const now  = new Date().toLocaleString();
  let data = {
        "Username": username,
        "Password": password,
        "SessionId": sessionId,
        "Timestamp": now
        };
  return fetch(`http://localhost:50813/api/sessions/`, {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => handleLoginError(error))
      .then(response => handleLoginSuccess(response));
}

function handleLoginSuccess(response) {
  // An undefined reponse implies credentials failed
  if (!response) {
    // Then set a flash message
    window.alert("Your credentials were not successful, please try again.");
    return;
  }
  else {
    console.log('handleLoginResponse Success:', response);

    switch (response.userSessionType) {
      // Customer user
      case 1:
        // Then set customerToken cookie with sessionId created by uuid and also recorded in the Session table
        Client.setCookie("customerToken", response.sessionId, 1);
        //Redirect to page before Login
        window.history.go(-2);
        break;
      // Reports user
      case 2:
        Client.setCookie("reportsToken", "R_-" + response.sessionId);
        //Redirect to page before Login
        window.history.go(-2);
        break;
      // Admin user
      case 3:
        Client.setCookie("adminToken", "A_-" + response.sessionId);
        //Redirect to page before Login
        window.history.go(-2);
        break;
      default:
        console.log("There was an error determining the user session type");
    }
  }
}

function handleLoginError(error) {
  console.error('handleLoginError Error:', error);
  // Then set a flash message
  window.alert("There was an error logging in, please try again.");
}

function logout() {
  console.log("Calling Client logout");
  deleteCookie("customerToken");
  deleteCookie("adminToken");
}

const Client = { 
  search, 
  getProduct,
  addProduct, 
  updateProduct, 
  deleteProduct, 
  updateProductRating, 
  addProductToCart, 
  deleteProductFromCart,
  getShoppingCart,
  setCookie, 
  getCookie, 
  deleteCookie, 
  //formatter, 
  logout, 
  login 
};

export default Client;
