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
import Order from './pages/Order';
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
        cartId: '',
        user: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    // const token = Client.getCookie("customerToken");
    // if (token) {
    //   Client.getShoppingCart(token, (cartProducts) => {
    //     let cartTotal = cartProducts.map(x => x.unitPrice * x.quantity).reduce((acc, current) => acc + current, 0);
    //     this.updateShoppingCartTotal(cartTotal);
    //     this.updateShoppingCartProducts(cartProducts);
    //     this.updateCartId(cartProducts[0].cartId);

    //     this.setState({
    //       products: cartProducts.slice(),
    //     },() => { 
    //       // setState is asynchronous, the following is executed after the callback returns
    //       console.log("Cart total: ", this.state.total)
    //     });
    //   }); 
    // }
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

  updateCartId(cartId){
    this.setState({
      cartId: cartId,
    });
  }

  handleLogin(event) {
    this.setState({
         loggedIn: true,
         user: event,
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
          <Header 
            userLoggedIn={this.state.loggedIn}
            loggedInUser={this.state.user}
            cartCount={this.state.cartProducts}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/orders/:id" component={Order} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route 
            path="/cart" 
            render={(props) => <ShoppingCart {...props} 
            updateCartTotal={this.updateShoppingCartTotal.bind(this)} 
            updateCartProducts={this.updateShoppingCartProducts.bind(this)}
            updateCartId={this.updateCartId.bind(this)} 
            shoppingCartTotal={this.state.shoppingCartTotal} />}
          />
          <Route  
            path="/checkout" 
            render={(props) => <Checkout {...props} 
            shoppingCartTotal={this.state.shoppingCartTotal}
            cartId={this.state.cartId}
            cartProducts={this.state.cartProducts} />}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productAdd" component={ProductAdd} />
          <Route
            path="/login"
            render={(props) => <Login {...props} 
            handleLogin={this.handleLogin.bind(this)} />}
          />
          {/*<Route path="/login" render={props => <Login handleLogin = {this.handleLogin} />} />*/}
        </div>
      </Router>
    )
  }
}


export default App;


