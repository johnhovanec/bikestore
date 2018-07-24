import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, About, Gear, Bikes } from './pages'
import logo from './logo.svg';
import './App.css';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={About}/>
      <Route exact path='/2' component={Gear} />
      <Route exact path='/3' component={Bikes} />
    </Switch>
  </main>
)


class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link 
                    className="nav-link" 
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
              {this.props.text}</Link>
        </li>
      );
  }
}


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // set the links in the header
      links: [
        {path: "/1", text: "About", isActive: false},
        {path: "/2", text: "Gear", isActive: false},
        {path: "/3", text: "Bikes", isActive: false},
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice(); 
    for (const j in links) {
      links[j].isActive = i == j ;
    }
    this.setState({links: links});
  }


  render() {
    return (
      <div>
        <HeaderGraphic />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
            {this.state.links.map((link, i) => 
              <NavLink 
                path={link.path} 
                text={link.text} 
                isActive={link.isActive}
                key={link.path} 
                onClick={() => this.handleClick(i)}
              /> 
              )}
          </ul>
        </nav>
      </div>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;


// import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
// import { Home, Page1, Page2, Page3 } from './pages' // import our pages
// import logo from './logo.svg';
// import './App.css';

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Home} />
//       <Route exact path='/1' component={Page1}/>
//       <Route exact path='/2' component={Page2} />
//       <Route exact path='/3' component={Page3} />
//     </Switch>
//   </main>
// )

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       {path: "/1", text: "Page 1", isActive: false},
//       {path: "/2", text: "Page 2", isActive: false},
//       {path: "/3", text: "Page 3", isActive: false},
//     }
//   }
//   <div>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/1">Page1</Link>
//       </li>
//       <li>
//         <Link to="/2">Page2</Link>
//       </li>
//       <li>
//         <Link to="/3">Page3</Link>
//       </li>
//     </ul>
//   </div>
// }

// // function getJson() {
// //   var requestURL = 'http://localhost:50813/api/products'; 
// //   var request = new XMLHttpRequest();
// //   request.open('GET', requestURL);
// //   request.responseType = 'json';
// //   request.send();
// //   request.onload = function() {
// //     var products = request.response;
// //     console.log(products[0].manufacturer);
// //   }
// // }

// // getJson();

// // class NewDiv extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello</h1>
// //       </div>
// //     );
// //   }
// // }


// const Main = () => (
//   <div>
//     main!
//   </div>
// )

// const Header = () => (
//   <div>
//     header!
//   </div>
// )

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )

// export default App;

// // const BasicExample = () => (
// //   <Router>
// //     <div>
// //       <App />
// //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //         <a className="navbar-brand" href="#">Navbar</a>
// //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
// //             <ul className="navbar-nav">
// //               <li className="nav-item">
// //                 <Link to="/" className="nav-item">Home</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/about" className="nav-item">About</Link>
// //               </li>
// //               <li className="nav-item dropdown">
// //                 <Link to="/products" className="nav-item">Products</Link>
// //               </li>
// //             </ul>
// //             <form className="form-inline my-2 my-lg-0">
// //               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
// //               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// //             </form>
// //         <hr />

// //         <Route exact path="/" component={Home} />
// //         <Route path="/about" component={About} />
// //         <Route path="/products" component={Products} />
// //       </div>
// //       </nav>
// //     </div>
// //   </Router>
// // );

// // const Home = () => (
// //   <div>
// //     <h2>Home</h2>
// //   </div>
// // );

// // const About = () => (
// //   <div>
// //     <h2>About</h2>
// //   </div>
// // );

// // const Products = ({ match }) => (
// //   <div>
// //     <h2>Products</h2>
// //     <ul>
// //       <li>
// //         <Link to={`${match.url}/mountain`}>Mountain</Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/road`}>Road</Link>
// //       </li>
// //       <li>
// //         <Link to={`${match.url}/hybrid`}>Hybrid</Link>
// //       </li>
// //     </ul>

// //     <Route path={`${match.url}/:productId`} component={Product} />
// //     <Route
// //       exact
// //       path={match.url}
// //       render={() => <h3>Please select a product type.</h3>}
// //     />
// //   </div>
// // );

// // const Product = ({ match }) => (
// //   <div>
// //     <h3>{match.params.productId}</h3>
// //   </div>
// // );

// // export default BasicExample;

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


// // export default App;
