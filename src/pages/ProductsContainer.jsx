import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from './../Client';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import history from './../history';

class ProductsContainer extends React.Component {
  state = {
    productsSelected: [],
    addToCartIcon: true, // TODO: set state here to control what can be added to cart
  };

  render() {
    return (
      <div className='App'>
        <div className='shopping-cart-container'>
          <p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
          <ShoppingCart
              products={this.state.productsSelected}
              onProductClick={
                (index) => (
                  this.setState({
                    productsSelected: [
                      ...this.state.productsSelected.slice(0, index),
                      ...this.state.productsSelected.slice(
                        index + 1, this.state.productsSelected.length
                      ),
                    ],
                  })
                )
              }
            />
        </div>
        <div className='products-container'>
          <Products
            onProductClick={
              (product) => (
                this.setState({
                  productsSelected: this.state.productsSelected.concat(product),
                })
              )
            }

            onDetailClick={
              (product) => (
                // this.setState({
                //   productsSelected: this.state.productsSelected.concat(product),
                // })
                // console.log("Detail clicked for id: " + product.id + " model:" + product.model),
                // this.setState({
                //   productsSelected: this.state.productsSelected.concat(product)
                // })
                history.push('/products/' + product.id)
              )
            }
          />
        </div>
      </div>

    );

  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
  // Client.search(match, (products) => {
  //   this.setState({
  //     productsSelected: products.slice(0, 1),
  //   });
  // })
);

export default ProductsContainer;
