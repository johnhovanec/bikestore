import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, About, Gear, Bikes, Details } from './pages';
import ProductsPage from './ProductsPage';
import DetailPage from './DetailPage';
import PostTest from './PostTest'
import logo from './logo.svg';
import './App.css';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/Home' component={Home} />
      <Route exact path='/About' component={About}/>
      <Route exact path='/Gear' component={Gear} />
      <Route exact path='/Bikes' component={Bikes} />
      <Route exact path='/Bikes/:id' component={Details} />
      <Route exact path='/posttest' component={PostTest} />
    </Switch>
    <ProductsPage />
  </main>

)


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


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // set the links in the header and get values from url
      links: [
        {path: "/Home", text: "Home", isActive: false},
        {path: "/About", text: "About", isActive: false},
        {path: "/Gear", text: "Gear", isActive: false},
        {path: "/Bikes", text: "Bikes", isActive: false},
        {path: "/posttest", text: "post", isActive: false}
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
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

        <Route path="/bikes/:id" component={ItemDetail} />
      </div>
    );
  }
}

const ItemDetail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
    <DetailPage />
  </div>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;




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
