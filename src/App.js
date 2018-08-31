import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home, About } from './pages';
import ProductsPage from './ProductsPage';
import PostTest from './PostTest';
import Cart from './Cart';
import GetCart from './GetCart';
import ProductSearch from './pages/ProductSearch';
import Product from './pages/Product';
import DetailPage from './pages/DetailPage';
import Detail from './pages/Detail';
import Header from './pages/Header';
import './App.css';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={DetailPage} />
      <Route exact path="/product/:id" component={Detail} />
    </div>
  </BrowserRouter>
)

export default App;


