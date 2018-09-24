import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductSearch from './pages/ProductSearch';
import ProductsContainer from './pages/ProductsContainer';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Client from './Client'
import history from './history';
import uuid from 'uuid';
// import PostTest from './PostTest';
// import Cart from './Cart';
// import GetCart from './GetCart';
import './App.css';

// Create a unique sessionId for the session to expire in 1 day
const uuidv1 = require('uuid/v1');
const sessionId = uuidv1();
console.log("sessionId: " + sessionId);
Client.setCookie("sessionId", sessionId, 1);

// to generate faux customerIds
let date = new Date();
let custId = Math.round(date.getTime() / 1000);
Client.setCookie("customerId", custId, 1);

const App = () => (
  <Router history={history}>
    <div>
      <p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/products" component={ProductsContainer} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
)

export default App;


