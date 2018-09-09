import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from './../Client';
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import history from './../history';

function filterId(products) {
  console.log("+_+ " + products);
}


class ProductsContainer extends React.Component {
  state = {
    productsSelected: [],
    addToCartIcon: true, // TODO: set state here to control what can be added to cart
  };

  componentDidUpdate() {
    console.log("ShoppingCart + Products has mounted");
  }

  render() {
    return (
      <div className='App'>
        <div className='shopping-cart-container'>
          <p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
          <p><b>customerId:</b> {Client.getCookie("customerId")}</p>
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
                })//,
                //Client.addToCart(product)
              )
            }

            onDetailClick={
              (product) => (
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
