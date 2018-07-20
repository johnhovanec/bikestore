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

// class NewDiv extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }



const BasicExample = () => (
  <Router>
    <div>
      <App />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-item">Home</Link>
              </li>
              <li className="nav-item active">
                <Link to="/about" className="nav-item">About</Link>
              </li>
              <li className="nav-item active">
                <Link to="/products" className="nav-item">Products</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
      </div>
      </nav>
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
        {/*<NewDiv />*/}
      </div>
    );
  }
}


// export default App;
