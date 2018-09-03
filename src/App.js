import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductSearch from './pages/ProductSearch';
import ProductsContainer from './pages/ProductsContainer';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
// import PostTest from './PostTest';
// import Cart from './Cart';
// import GetCart from './GetCart';
import './App.css';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/products" component={ProductsContainer} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <Route exact path="/cart" component={ShoppingCart} />
    </div>
  </BrowserRouter>
)

export default App;


