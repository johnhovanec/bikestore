import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import logo from '../logo.svg';
import createHistory from "history/createBrowserHistory"

const history = createHistory();

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // set the links in the header and get values from url
      links: [
        {path: "/Home", text: "Home", isActive: false},
        {path: "/About", text: "About", isActive: false},
        {path: "/Products", text: "Bikes", isActive: false},
        {path: "/Cart", text: "Cart", isActive: false},
        {path: "/Login", text: "login", isActive: false},
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
        <HeaderGraphic />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
          {/*<Link className="navbar-brand" to="/">Home</Link>*/}
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
          {/*<form className="form-inline my-2 my-lg-0" onSubmit={this.onSearchSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
          </form>*/}
        </nav>
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