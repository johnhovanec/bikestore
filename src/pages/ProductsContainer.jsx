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
    console.log("ShoppingCart has mounted for " + Client.getCookie("sessionId"));
  }

  render() {
    return (
      <div className='App'>
        <div className='container text-center mt-5'>
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

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
//   // Client.search(match, (products) => {
//   //   this.setState({
//   //     productsSelected: products.slice(0, 1),
//   //   });
//   // })
// );

export default ProductsContainer;
