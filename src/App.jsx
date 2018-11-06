import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';

import ProductsContainer from './pages/ProductsContainer';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import ProductAdd from './pages/ProductAdd';
import Account from './pages/Account';
import Client from './Client'
import history from './history';
import uuid from 'uuid';
// import PostTest from './PostTest';
// import Cart from './Cart';
// import GetCart from './GetCart';
import './App.css';

// Create a unique sessionId for the session to expire in 10 days
// const uuidv1 = require('uuid/v1');
// const sessionId = uuidv1();
// if (!Client.getCookie("sessionId")) {
//   Client.setCookie("sessionId", "S_" + sessionId, 10);
//   Client.setSessionId("S_" + sessionId);
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn: false,
        shoppingCartTotal: '',
        cartProducts: [],
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  updateShoppingCartTotal(shoppingCartTotal){
    this.setState({
      shoppingCartTotal: shoppingCartTotal,
    });
  }

  updateShoppingCartProducts(cartProducts){
    this.setState({
      cartProducts: cartProducts,
    });
  }

  handleLogin(event) {
    this.setState({
         loggedIn: true
      },() => { 
      // setState is asynchronous, the following is executed after the callback returns
       console.log("handleLogin from App.js", this.state.loggedIn);
   });
  };

  loggedIn() {
    return this.state.loggedIn;
  };


  render() {
    return (
      <Router history={history}>
        <div>
          <Header userLoggedIn={this.state.loggedIn}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route 
            path="/cart" 
            render={(props) => <ShoppingCart {...props} 
            updateCartTotal={this.updateShoppingCartTotal.bind(this)} 
            updateCartProducts={this.updateShoppingCartProducts.bind(this)} />} 
          />
          <Route  
            path="/checkout" 
            render={(props) => <Checkout {...props} 
            shoppingCartTotal={this.state.shoppingCartTotal}
            cartProducts={this.state.cartProducts} />}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productAdd" component={ProductAdd} />
          <Route
            path="/login"
            render={(props) => <Login {...props} handleLogin={this.handleLogin.bind(this)} />}
          />
          {/*<Route path="/login" render={props => <Login handleLogin = {this.handleLogin} />} />*/}
        </div>
      </Router>
    )
  }
}


export default App;


