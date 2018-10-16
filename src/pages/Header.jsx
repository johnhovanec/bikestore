import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import Client from './../Client';
import logo from '../logo.svg';
import createHistory from "history/createBrowserHistory";
import { FaShoppingCart } from 'react-icons/fa';

const history = createHistory();

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // set the links in the header and get values from url
      links: [
        {path: "/Home", text: "Home", isActive: false},
        {path: "/About", text: "About", isActive: false},
        {path: "/Products", text: "Bikes", isActive: false},
        {path: "/Cart", text: "Cart", isActive: false},
        {path: "/Login", text: "login", className:"nav-align-right", isActive: false},
        {path: "/Checkout", text: "Checkout", isActive: false},
        // {path: "/posttest", text: "post", isActive: false},
        // {path: "/cart", text: "Add To Cart", isActive: false},
        // {path: "/getcart", text: "Get Cart", isActive: false},
      ]
    }
  }

  handleClick(item) {
    const links = this.state.links.slice();
    for (const i in links) {
      links[i].isActive = item === i ;
    }
    this.setState({links: links});
  }

  onSearchSubmit(evt) {
  	evt.preventDefault();
    console.log("Search clicked: " + evt.target.value);
    
  }

  render() {
    return (
      <div>
        <h5>User logged in?: {this.props.userLoggedIn.toString()}</h5>
        <HeaderGraphic />
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav">
                  {this.state.links.map((link, item) =>
                    <NavLink
                      path={link.path}
                      text={link.text}
                      isActive={link.isActive}
                      key={link.path}
                      onClick={() => this.handleClick(item)}
                    />
                    )}
                </ul>
            </div>
            <div className="mx-auto order-0">
                <a className="navbar-brand mx-auto" href="#">The Bike Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    {
                      (Client.getCookie("customerToken")) || (Client.getCookie("adminToken")) ? (
                        <a href="#" className="nav-link" onClick={Client.logout}>Logout</a>
                      ) :
                         <a className="nav-link" href="#">Login</a>
                    }
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" link="/Cart" href="/Cart">Shopping Cart <FaShoppingCart /></a>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Display a banner if the user is functioning as an admin */}
        { (Client.getCookie("adminToken")) ? (
          <div class="alert alert-warning text-center" role="alert">
            <strong>Warning!</strong> You are currently logged-in as an Administrator.
          </div> ) : <div></div>
        }
      </div>
    );
  }
}

// Logo at top of page above nav bar
class HeaderGraphic extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Bike Store</h1>
        </header>
        {/*<NewDiv />*/}
      </div>
    );
  }
}


// Navbar links
class NavLink extends Component {
  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
          <Link className="nav-link" to={this.props.path} onClick={() => this.props.onClick()}>
            {this.props.text}
          </Link>
        </li>
      );
  }
}


export default Header;