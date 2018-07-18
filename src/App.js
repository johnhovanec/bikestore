import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

getJson();

class NewDiv extends Component {
  render() {
    return (
      <div>
        <h1>Hello </h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Bike Store</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewDiv />
      </div>
    );
  }
}


export default App;
