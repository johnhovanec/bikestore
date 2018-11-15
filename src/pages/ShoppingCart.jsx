import React from 'react';
import Client from './../Client';
import history from './../history';
let cartTotal = 0;

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      customerToken: Client.getCookie("customerToken"),
    };

    this.handleCartIdUpdate = this.handleCartIdUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCartTotalUpdate = this.handleCartTotalUpdate.bind(this);
    this.handleCartProductUpdate = this.handleCartProductUpdate.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
}

  componentDidMount() {
    console.log("Shopping Cart mounted for initial populate.");

    if (!Client.getCookie("customerToken")) {
        alert("Please sign in or register to save items to a cart, redirecting to /login");
        history.push("/login");
        return;
    }
    console.log("In Cart: " + Client.getCookie("customerToken"));

    if (Client.getCookie("customerToken")) {
      Client.getShoppingCart(this.state.customerToken, (cartProducts) => {
        let cartTotal = cartProducts.map(x => x.unitPrice * x.quantity).reduce((acc, current) => acc + current, 0);
        this.handleCartTotalUpdate(cartTotal);
        this.handleCartProductUpdate(cartProducts);
        this.handleCartIdUpdate(cartProducts[0].cartId);

        this.setState({
          products: cartProducts.slice(),
        },() => { 
          // setState is asynchronous, the following is executed after the callback returns
          console.log("Cart total: ", this.state.total)
        });
    }); 
  }
}

handleCartIdUpdate(cartId){
  this.props.updateCartId(cartId);
}

handleCartTotalUpdate(total){
  this.props.updateCartTotal(total);
}

handleCartProductUpdate(products){
  this.props.updateCartProducts(products);
}

sumCart(subtotal) {
  console.log("In sumCart: " + subtotal);
  cartTotal = cartTotal + subtotal;
  console.log("In cartTotal: " + cartTotal);
}

handleDelete(id) {
  console.log("Calling handleDelete from Cart on id: ", id);
  Client.deleteProductFromCart(id);
}

handleCheckout() {
  history.push('/Checkout');
}


  render() {
    return (
      <div className="container text-center mt-5 d-flex justify-content-center">
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
                  { this.sumCart(product.unitPrice * product.quantity) }
                </td>
                <td>
                  <button type="button" id="productDelete" data-id={product.id} className="btn btn-sm btn-primary" onClick={this.handleDelete.bind(this, product.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
            <tfoot>
              <tr>
                <th colSpan="5">Total</th>
                <td className='center aligned' id='price'>${this.props.shoppingCartTotal}</td>
              </tr>
            </tfoot>
          </table>
          <div className="container text-right">
            <button className="btn btn-md btn-success" onClick={this.handleCheckout}>Checkout</button>
          </div>
      </div>
    </div>
    );
  }
}

export default ShoppingCart;

