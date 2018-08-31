import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, About, Gear, Bikes, Details } from './pages';
import ProductsPage from './ProductsPage';
import PostTest from './PostTest';
import Cart from './Cart';
import GetCart from './GetCart';
import ProductSearch from './pages/ProductSearch';
import Header from './pages/Header';
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
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/getcart' component={Cart} />
    </Switch>
    <ProductsPage />
  </main>

)


class App extends React.Component {
  state = {
    selectedProducts: [],
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
        <ProductSearch 
          onProductClick={
              (product) => (
                this.setState({
                  selectedProducts: this.state.selectedProducts.concat(product),
                })
              )
            }
        />
      </div>
    );
  }
}
export default App;


