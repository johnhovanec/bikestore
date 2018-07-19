import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <h1>Hello</h1>
      </div>
    );
  }
}



const BasicExample = () => (
  <Router>
    <div>
      <App />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Products = ({ match }) => (
  <div>
    <h2>Products</h2>
    <ul>
      <li>
        <Link to={`${match.url}/mountain`}>Mountain</Link>
      </li>
      <li>
        <Link to={`${match.url}/road`}>Road</Link>
      </li>
      <li>
        <Link to={`${match.url}/hybrid`}>Hybrid</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:productId`} component={Product} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a product type.</h3>}
    />
  </div>
);

const Product = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  </div>
);

export default BasicExample;

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


// export default App;
