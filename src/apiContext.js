function getJson() {
  var requestURL = 'http://localhost:50813/api/products'; 
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var products = request.response;
    console.log(products[0].manufacturer);
  }
}