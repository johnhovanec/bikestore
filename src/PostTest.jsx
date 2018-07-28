import React from 'react';


class PostTest extends React.Component {
  constructor() {
      super();
      this.state = {productList: []};
  }

  componentDidMount() {
    var url = 'http://localhost:50813/api/products/';
    let headers = new Headers({
      'Content-Type':'application/json; charset=utf-8;' 
      ,'Accept':'*/*'
    });
    var data = {
    	"name": "post example",
    	"manufacturer": "Huffy",
    	"model": "Desperado",
    	"type": "Road",
    	"color": "yellow",
    	"price": 99.75
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
    let productList =  <li><i>Post sent</i></li>;

    return <ul>
      {productList}
    </ul>;
  }
}

export default PostTest;