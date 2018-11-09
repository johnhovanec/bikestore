import React from 'react';
import Client from './../Client';
import history from './../history';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      orderDetails: '',
      customerToken: Client.getCookie("customerToken"),
    };

}

  componentDidMount() {
    if (!Client.getCookie("customerToken")) {
        alert("Please sign in or register to save items to a cart, redirecting to /login");
        history.push("/login");
        return;
    }

    console.log("In Cart: " + Client.getCookie("customerToken"));

    if (Client.getCookie("customerToken")) {
      Client.getShoppingCart(this.state.customerToken, (cartProducts) => {
        this.setState({
          products: cartProducts.slice(),
        });
      });

      Client.getOrder(18, (orderDetails) => {
        this.setState({
          orderDetails: orderDetails,
        });
      });
    }
  }

  render() {
    return (
      <div className="container text-center filler mt-5">
        <div className="row">
          <table className='table'>
            <thead>
              <tr>
                <th colSpan='6'>
                  <h3>Thank you for your order</h3>
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
                <th className='center aligned'></th>
              </tr>
            </thead>
            <tbody>
          {
            this.state.products.map((product, index) => (
              <tr
                key={index}
               
              >
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
                  {product.quantity}
                </td>
                <td className='right aligned'>
                  {product.unitPrice * product.quantity}
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      <div class="d-flex align-items-end flex-column mt-5 mr-4">
        <div className="mt-4"><span className="font-weight-bold">Subtotal:</span>&emsp;<span className="inline p-2">${this.state.orderDetails.subtotal}</span></div>
        <div className="mt-4"><span className="font-weight-bold">Shipping:</span>&emsp;<span className="inline p-2">${this.state.orderDetails.shippingCost}</span></div>
        <div className="mt-4"><span className="font-weight-bold">Tax:</span>&emsp;<span className="inline p-2">${this.state.orderDetails.tax}</span></div>
        <div className="mt-4"><span className="font-weight-bold">Total:</span>&emsp;<span className="inline p-2">${this.state.orderDetails.total}</span></div>
      </div>
    </div>
    );
  }
}

export default Order;

