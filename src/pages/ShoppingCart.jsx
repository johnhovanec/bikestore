import React from 'react';
import Client from './../Client';
import history from './../history';


class ShoppingCart extends React.Component {
  state = {
    products: [],
    customerToken: Client.getCookie("customerToken"),
  };

  componentDidMount() {
    console.log("Shopping Cart mounted for initial populate.");

    if (!Client.getCookie("customerToken")) {
        console.log("No customerToken for shopping cart page, redirecting to /register");
        history.push("/register");
    }
    console.log(Client.getCookie("customerToken"));

    Client.getShoppingCart(this.state.customerToken, (products) => {
      this.setState({
        products: products.slice(),
      });
    });
  }


  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <table className='ui selectable structured large table'>
            <thead>
              <tr>
                <th colSpan='6'>
                  <h3>Shopping Cart</h3>
                </th>
              </tr>
              <tr>
                {/* <th className='eight wide'>Description</th> */}
                <th className='center aligned'>Manufacturer</th>
                <th className='center aligned'>Model</th>
                <th className='center aligned'>Color</th>
                <th className='center aligned'>Size</th>
                <th className='center aligned'>Qty</th>
                <th className='center aligned'>Price</th>
              </tr>
            </thead>
            <tbody>
          {
            this.state.products.map((product, index) => (
              <tr
                key={index}
                onClick={() => this.props.onProductClick(product)}
              >
                <td>{product.description}</td>
                <td className='right aligned'>
                  {product.model}
                </td>
                <td className='right aligned'>
                  {product.manufacturer}
                </td>
                <td className='right aligned'>
                  {product.color}
                </td>
                <td className='right aligned'>
                  {product.size}
                </td>
                <td className='right aligned'>
                  {product.price}
                </td>
                <td className='right aligned'>
                  <a href="#" onClick={() => this.props.onDetailClick(product)} >
                    <i className='info circle icon'/> Details
                  </a>
                </td>
              </tr>
            ))
          }
          </tbody>
            <tfoot>
              <tr>
                <th colSpan="5">Total</th>
                <th
                  className='center aligned'
                  id='price'
                >
                  
                </th>
              </tr>
            </tfoot>
          </table>
          <div className="container text-right">
            <button className="btn btn-md btn-success">Checkout</button>
          </div>
      </div>
    </div>
    );
  }
}

export default ShoppingCart;

