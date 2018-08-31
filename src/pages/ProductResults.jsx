import React from 'react';

class ProductResults extends React.Component {
	render() {
		return(
		fetch("http://localhost:50813/api/products?searchTerm=${query}", {headers: new Headers({
        "Accept": "application/json"    })})
        .then(response => response.json())
        .then(products => this.setState({productList: products}))
        .catch(error => console.log(error))
        );
	}
}

export default ProductResults;