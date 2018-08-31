import React from 'react';

const Detail = ({match}) => (
	<div>
		<h3>Detail</h3>
		<h4>ID: {match.params.id}</h4>
	</div>
);


export default Detail;