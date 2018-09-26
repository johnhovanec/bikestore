import React from 'react';
import Client from './../Client';
import { FaThumbsUp } from 'react-icons/fa';
import { FaChevronCircleUp } from 'react-icons/fa';


class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    product: {},
		    rating: 0,
		    clearSearchIcon: false,
		    addToCartIcon: '',
		};
	}
  

  componentDidMount() {
    console.log("Product Detail Component mounted and now calling populate for id: " + this.props.match.params.id);
    Client.getProduct(this.props.match.params.id, (product) => {
      this.setState({
        product: product,
        rating: product.rating,
      });
    });
  }

  componentDidUpdate(){
  	console.log("Detail updating");
  }

  incrementRating() {
  	this.setState({
	       rating: parseInt(this.state.rating) + 1
	    },() => { 
	    // setState is asynchronous, the following is executed after the callback returns
	     console.log("++ updating inc rating:", this.state.rating) 
	     Client.updateProductRating(this.props.match.params.id, this.state.rating);
	 });
  };

  decrementRating() {
  	this.setState({
	       rating: parseInt(this.state.rating) - 1
	    },() => { 
	    // setState is asynchronous, the following is executed after the callback returns
	     console.log("-- updating dec rating:", this.state.rating) 
	     Client.updateProductRating(this.props.match.params.id, this.state.rating);
	 });
  };





  render() {
    return (
      <div id=''>
      	<p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='8'>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Description</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th><FaThumbsUp /></th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>
          {
	          <tr>
	            <td>{this.state.product.description}</td>
	            <td className='right aligned'>
	              {this.state.product.model}
	            </td>
	            <td className='right aligned'>
	              {this.state.product.manufacturer}
	            </td>
	            <td className='right aligned'>
	              {this.state.product.color}
	            </td>
	            <td className='right aligned'>
	              {this.state.product.size}
	            </td>
	            <td className='right aligned'>
	              {this.state.product.price}
	            </td>
	            <td className='right aligned'>
	              <button onClick={(e) => this.decrementRating(e)}> - </button>
	              {this.state.rating} 
	              <button onClick={(e) => this.incrementRating(e)}> + </button>
	            </td>
	          </tr>   
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductDetail;
