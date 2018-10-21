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
// GET api/products/1
function getProduct(query, callback) {
  return fetch(`http://localhost:50813/api/products/${query}`, {
    method: "GET",
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
// function deleteProduct(id, callback) {
//   var url = 'http://localhost:50813/api/products/' + id;
//   fetch(url, {
//     method: 'DELETE',
//     mode: 'cors',
//     headers:{
//       'Access-Control-Allow-Origin': '*'
//     },
//   }).then(response => {
//     // response from server
//     // check status of response and handle it manually
//     switch (response.status) {
//       case 500: console.error('Some server error'); break;
//       case 401: console.error('Unauthorized'); break;
//       // ...
//     }
//     // check if status in the range 200 to 299
//     if (response.ok) {
//       return response;
//       alert("Delete was successful");
//     } else {
//       // push error further for the next catch`
//       return Promise.reject(response);
//       // or throw error
//       throw Error(response.statusText);
//     }
//   })
//   .catch(error => {
//     // here you will get only Fetch API errors and those you threw or rejected above
//     // in most cases Fetch API error will look like common Error object
//     // {
//     //   name: "TypeError",
//     //   message: "Failed to fetch",
//     //   stack: ...
//     // }
//   });
//   //   }).then(res => res.json())
//   // .catch(error => console.error(error))
//   // .then(response => console.log(response));
// }

// function handleDeleteProductSuccess(response) {
//   if (response) {
//     console.log("Product was successfully deleted: ", response);
//     window.alert("Product was successfully deleted.");
//   }
// }

// function handleDeleteProductError(response) {
//   if (response) {
//     console.log("Error deleted product: ", response);
//     window.alert("Error deleted product: ");
//   }
// }

function deleteProduct(id){
  // var xhr = new XMLHttpRequest();
  // var url = 'http://localhost:50813/api/products/' + id;
  // xhr.open('DELETE', url, true);
  // xhr.send();
  // xhr.addEventListener("readystatechange", handleDeleteProduct(xhr), false);

  var xhr = new XMLHttpRequest(),
      method = "DELETE",
      url = 'http://localhost:50813/api/products/' + id;

  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(">> Product deleted:" + " " + xhr.responseText);
    }
  };
  xhr.send();
}

function handleDeleteProduct(xhr) {
  if (xhr.readyState) {
    console.log("Product was successfully deleted: ", xhr);
    window.alert("Product was successfully deleted.");
    //var response = JSON.parse(xhr.responseText);
    console.log("@@ ", xhr);
  }
}

////    Shopping cart     //// 
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

// Helper method to check the AJAX response
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
    return false;
}

function deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

// Currency formatting helper
// var formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// });

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
        Client.setCookie("adminToken", "A_-" + response.sessionId, 1);
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
  addToCart, 
  setCookie, 
  getCookie, 
  deleteCookie, 
  //formatter, 
  logout, 
  login 
};

export default Client;
