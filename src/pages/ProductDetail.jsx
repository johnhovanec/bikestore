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
    if (!Client.getCookie("adminToken")) {
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
    } else {
      return (
        <div className="container">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Id</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder={this.state.product.id} />

                <label htmlFor="inputEmail4">Model</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder={this.state.product.model} />

                <label htmlFor="inputAddress">Color</label>
                <input type="text" className="form-control" id="inputAddress" placeholder={this.state.product.color} />

                <label htmlFor="inputAddress">Home Page Position</label>
                <input type="number" className="form-control" id="inputAddress" step="1" min="0" max="9"
                  placeholder={this.state.product.homePagePosition ? this.state.product.homePagePosition : "0: Not selected for home page"} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Manufacturer</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={this.state.product.manufacturer} />

                <label htmlFor="inputPassword4">Name</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={this.state.product.name} />

                <label htmlFor="inputPassword4">Price</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={this.state.product.price} />

                <label htmlFor="inputPassword4">Inventory Quantity</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={this.state.product.inventoryQuantity} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Image Path</label>
              <input type="text" className="form-control" id="inputAddress" placeholder={this.state.product.imagePath} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Type</label>
                <select id="inputState" className="form-control">
                  <option selected>{this.state.product.type}</option>
                  <option>Mountain</option>
                  <option>Road</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputState">Size</label>
                <select id="inputState" className="form-control">
                  <option selected>{this.state.product.size}</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={this.state.product.description}></textarea>
            </div>
               <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default ProductDetail;
