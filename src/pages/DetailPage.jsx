import React from 'react';

class DetailPage extends React.Component {
  constructor() {
      super();
      this.state = {productList: []};
  }

  componentDidMount() {
    fetch("http://localhost:50813/api/products", {headers: new Headers({
        "Accept": "application/json"    })})
        .then(response => response.json())
        .then(products => this.setState({productList: products}))
        .catch(error => console.log(error))
  }

  render() {
    let productList = this.state.productList.map((product) =>
                        <li><i>{product.manufacturer}</i>
                           - {product.model} -*- {product.color} -
                           ${product.price}
                        </li>);

    return (
      <ul>
        {productList}
      </ul>
    );
  }
};

export default DetailPage;