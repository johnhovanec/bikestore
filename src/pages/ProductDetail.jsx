import React from 'react';

const ProductDetail = ({match}) => (
	<div>
		<h3>Product Detail page</h3>
		<h4>ID: {match.params.id}</h4>
	</div>
);


export default ProductDetail;