import React from 'react';
import ProductResults from './pages/ProductResults';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}


class ProductsPage extends React.Component {
  constructor() {
      super();
      this.state = {productList: []};
  }

  
  componentDidMount() {
    <ProductResults />
  }

  

  render() {
    let productList = this.state.productList.map((product) =>
                        <li><i>{product.manufacturer}</i>
                        	 - {product.model} - {product.color} - 
                        	 ${product.price} - 
                        	 Qty: {product.inventoryQuantity}
                        </li>);

    return <ul>
      {productList}
    </ul>;
  }
};

export default ProductsPage