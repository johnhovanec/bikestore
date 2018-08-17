import React from 'react';


class Cart extends React.Component {
  constructor() {
      super();
      this.state = {cartList: []};
  }

  componentDidMount() {
    var url = 'http://localhost:50813/api/shoppingcarts';
    let headers = new Headers({
      'Content-Type':'application/json; charset=utf-8;'
      ,'Accept':'*/*'
    });
    var data = {
        "customerId":1,"cartTimeStamp":"2018-08-12T22:12:32.2957723",
        "orderPlaced":null,
        "orderPlacedTimeStamp":null,
        "paymentMethod":null,
        "customer":null
    	};

	console.log("ready to send fetch...")
	// var request = new XMLHttpRequest();
	// request.open('POST', url, true);
	// request.setRequestHeader('Content-Type', 'application/json');
	// request.setRequestHeader('Accept', '*/*');
	// request.send(data);

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers:{
      	'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  render() {
    let cartList =  <li><i>Post sent</i></li>;

    return <ul>
      {cartList}
    </ul>;
  }
}

export default Cart;