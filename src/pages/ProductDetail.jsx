import React from 'react';
import Client from './../Client';
import { FaThumbsUp } from 'react-icons/fa';
import { FaChevronCircleUp } from 'react-icons/fa';
import history from './../history';


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
        cartQuantity: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleCartSubmit = this.handleCartSubmit.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleUpdateSubmit(event) {
    console.log("Form was submitted for Id: " + this.state.id);
    var data = {
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
    };
    event.preventDefault();
    Client.updateProduct(this.props.match.params.id, data)
  };

  handleDelete(event) {
    console.log("Calling handleDelete on id: ", this.props.match.params.id);
    Client.deleteProduct(this.props.match.params.id);
  }

   handleCartSubmit(event) {
    console.log("Cart submitted");
    var data = {
      "id": this.state.product.id, 
      //"name": this.state.name, 
      "manufacturer": this.state.manufacturer,
      "model": this.state.model, 
      "type": this.state.type, 
      "size": this.state.size, 
      "color": this.state.color, 
      "description": this.state.description, 
      "rating": this.state.rating, 
      "price": this.state.price,
      "inventoryQuantity": this.state.inventoryQuantity, 
      //"imagePath": this.state.imagePath,
      //"homePageIndex": this.state.homePageIndex,
      "cartQuantity": this.state.cartQuantity,
      "sessionId": Client.getCookie("customerToken"),
    };
    event.preventDefault();
    Client.addProductToCart(data)
  };

  render() {
    // Regular user or Customer
    if (!Client.getCookie("adminToken")) {
    return (
      <div className='row d-flex justify-content-center'>
      <div className='col-lg-10'>
        <form onSubmit={this.handleCartSubmit}>
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
                <th>Quantity</th>
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
                <td>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="cartQuantity" 
                    name="cartQuantity"
                    min="1" 
                    max={this.state.product.inventoryQuantity}
                    value={this.state.cartQuantity ? this.state.cartQuantity : '1'} 
                    onChange={this.handleInputChange} 
                  />
                </td>
                <td>
                  <button type="submit" id="productAddToCart" className="btn btn-primary">Add To Cart</button>
                </td>
              </tr>   
            }
            </tbody>
          </table>
        </form>
      </div>
      </div>
    );
    } 
    // Admin user
    else {
      return (
        <div className="d-flex justify-content-center">
          <div className="col-lg-6">
          <form onSubmit={this.handleUpdateSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputId">Id</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputId" 
                  readOnly 
                  value={this.state.id} 
                />
                <label htmlFor="inputModel">Model</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputModel" 
                  name="model" 
                  value={this.state.model} 
                  onChange={this.handleInputChange}
                />
                <label htmlFor="inputColor">Color</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputColor" 
                  name="color" 
                  value={this.state.color} 
                  onChange={this.handleInputChange}
                />
                <label htmlFor="inputHomePagePosition">Home Page Position</label>
                <select 
                  id="homePageIndex" 
                  className="form-control"
                  name="homePageIndex"
                  value={this.state.homePageIndex ? this.state.homePageIndex : "0"}
                  onChange={this.handleInputChange}>
                  <option value="Not Selected">Not Selected</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputManufacturer">Manufacturer</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputManufacturer" 
                  name="manufacturer" 
                  value={this.state.manufacturer} 
                  onChange={this.handleInputChange}
                />
                <label htmlFor="inputName">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputName" 
                  name="name" 
                  value={this.state.name ? this.state.name : ''} 
                  onChange={this.handleInputChange} 
                />
                <label htmlFor="inputPrice">Price</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputPrice" 
                  name="price" 
                  value={this.state.price}
                  onChange={this.handleInputChange} 
                />

                <label htmlFor="inventoryQuantity">Inventory Quantity</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inventoryQuantity" 
                  name="inventoryQuantity" 
                  value={this.state.inventoryQuantity} 
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="imagePath">Image Path</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputImagePath" 
                name="imagePath" 
                value={this.state.imagePath ? this.state.imagePath : ''} 
                onChange={this.handleInputChange} 
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputType">Type</label>
                <select 
                  id="inputType" 
                  className="form-control"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInputChange}>
                  <option value="Mountain">Mountain</option>
                  <option value="Road">Road</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputRating">Rating</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="inputRating" 
                  name="rating"
                  min="0" 
                  value={this.state.rating ? this.state.rating : '0'} 
                  onChange={this.handleInputChange} 
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputSize">Size</label>
                <select 
                  id="inputSize" 
                  className="form-control"
                  name="size"
                  value={this.state.size}
                  onChange={this.handleInputChange}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
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
               <button type="submit" id="productUpdate" className="btn btn-primary">Update</button>
               <button type="button" id="productDelete" className="btn btn-primary btn-warning" onClick={(e) => this.handleDelete(e)}>Delete</button>
          </form>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetail;
