import React from 'react';
import Client from './../Client';
import { FaThumbsUp } from 'react-icons/fa';
import { FaChevronCircleUp } from 'react-icons/fa';


class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    product: {},
        id: '',
        name: '', 
        manufacturer: '',
        model: '',
        type: '', 
        size: '', 
        color: '', 
        description: '', 
        rating: '', 
        price: '',
        inventoryQuantity: '', 
        imagePath: '',
        homePageIndex: '',
		    clearSearchIcon: false,
		    addToCartIcon: '',
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
  
  componentDidMount() {
    console.log("Product Detail Component mounted and now calling populate for id: " + this.props.match.params.id);
    Client.getProduct(this.props.match.params.id, (product) => {
      this.setState({
        product: product,
        id: product.id,
        name: product.name, 
        manufacturer: product.manufacturer,
        model: product.model,
        type: product.type, 
        size: product.size, 
        color: product.color, 
        description: product.description, 
        rating: product.rating, 
        price: product.price,
        inventoryQuantity: product.inventoryQuantity, 
        imagePath: product.imagePath,
        homePageIndex: product.homePageIndex,
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

  handleChange(event) {
    this.setState({imagePath: event.target.value});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("Form was submitted for Id: " + this.state.id);
    var data = [{
      "id": this.state.id, 
      "name": this.state.name, 
      "manufacturer": this.state.manufacturer,
      "model": this.state.model, 
      "type": this.state.type, 
      "size": this.state.size, 
      "color": this.state.color, 
      "description": this.state.description, 
      "rating": this.state.rating, 
      "price": this.state.price,
      "inventoryQuantity": this.state.inventoryQuantity, 
      "imagePath": this.state.imagePath,
      "homePageIndex": this.state.homePageIndex,
    }];
    event.preventDefault();
    Client.updateProduct(this.props.match.params.id, data)
  };

  render() {
    // Regular user or Customer
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
    } 
    // Admin user
    else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Id</label>
                <input type="text" className="form-control" id="inputEmail4" readOnly placeholder={this.state.product.id} />

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

                <label htmlFor="inputPrice">Price</label>
                <input type="text" className="form-control" id="inputPrice" name="price" value={this.state.price} onChange={this.handleInputChange} />

                <label htmlFor="inputPassword4">Inventory Quantity</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={this.state.product.inventoryQuantity} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="imagePath">Image Path</label>
              <input type="text" className="form-control" id="inputImagePath" name="imagePath" value={this.state.imagePath} onChange={this.handleInputChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Type</label>
                <select 
                  id="inputState" 
                  className="form-control">
                  <option selected>{this.state.product.type}</option>
                  <option>Mountain</option>
                  <option>Road</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputState">Size</label>
                <select 
                  id="inputState" 
                  className="form-control">
                  <option selected>{this.state.product.size}</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="textareaDescription">Description</label>
              <textarea 
                className="form-control" 
                id="textareaDescription" 
                rows="3" 
                name="description" 
                value={this.state.description} 
                onChange={this.handleInputChange} >
              </textarea>
            </div>
               <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default ProductDetail;
