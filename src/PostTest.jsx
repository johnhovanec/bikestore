import React from 'react';


class PostTest extends React.Component {
  constructor() {
      super();
      this.state = {productList: []};
  }

  componentDidMount() {
    var url = 'http://localhost:50813/api/products';
    var data = {
    	"name": "post example",
    	"manufacturer": "Huffy",
    	"model": "Desperado",
    	"type": "Road",
    	"color": "yellow",
    	"price": 99.75
    	};

	// var request = new XMLHttpRequest();
	// request.open('POST', url, true);
	// request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	// request.send(data);
	console.log("ready to send fetch...")
    fetch(url, {
      method: 'POST', 
      mode: 'no-cors',
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
    let productList =  <li><i>Post sent</i></li>;

    return <ul>
      {productList}
    </ul>;
  }
}

export default PostTest;