import React from 'react';
import Client from './../Client';
import history from './../history';


class ProductAdd extends React.Component {
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

	}

  componentDidMount() {
    if (!Client.getCookie("adminToken")) {
      console.log("Unauthorized page visit without adminToken");
      history.push("/");
    }
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
    var data = {
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
    Client.addProduct(data)
    history.push("/products");
    window.location.reload(true);
  };

  render() {
      return (
        <div className="container">
          <h3>Add Product</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
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
            <button type="submit" id="addProduct" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Add Product</button>
          </form>
        </div>
      );
    
  }
}

export default ProductAdd;
