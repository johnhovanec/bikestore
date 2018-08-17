import React from 'react';

class GetCart extends React.Component {
  constructor() {
      super();
      this.state = {cartList: []};
  }

  componentDidMount() {
    fetch("http://localhost:50813/api/shoppingcarts", {headers: new Headers({
        "Accept": "application/json"    })})
        .then(response => response.json())
        .then(carts => this.setState({cartList: carts}))
        .catch(error => console.log(error))
  }

  render() {
    let cartList = this.state.cartList.map((cart) =>
                        <li><i>{cart.customerid}</i>
                        	 - {cart.carttimestamp} - {cart.paymentmethod} -
                        </li>);
    return <ul>
      {cartList}
    </ul>;
  }
}

export default GetCart;