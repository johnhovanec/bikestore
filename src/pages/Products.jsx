import React from 'react';
import Client from './../Client';
import history from './../history';

const MAX_NUMBER_OF_PRODUCTS = 20;

class ProductSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      clearSearchIcon: false,
      addToCartIcon: '',
      searchValue: '',
      sortProperty: '',
      sortedProducts: [],
    };

    this.handleSortChange = this.handleSortChange.bind(this);
}

  componentDidMount() {
    console.log("Component mounted and now calling search for initial populate.");
    Client.search('', (products) => {
      this.setState({
        products: products.slice(0, MAX_NUMBER_OF_PRODUCTS),
      });
    });
  }

  handleSortChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      sortProperty: value
    });

    this.sortProducts(value);
  }

  sortProducts(value) {
    switch (value) {
      case 'Price Ascending':
        this.setState({
          products: this.state.products.sort((a, b) => a.price - b.price),
        });
        break;
      case 'Price Descending':
        this.setState({
          products: this.state.products.sort((a, b) => b.price - a.price),
        });
        break;
      case 'Rating Ascending':
        this.setState({
          products: this.state.products.sort((a, b) => a.rating - b.rating),
        });
        break;
      case 'Rating Descending':
        this.setState({
          products: this.state.products.sort((a, b) => b.rating - a.rating),
        });
        break;
      default:
        let sortedProducts = [].concat(this.state.products);
    }
  }

  handleProductAdd() {
    history.push('/ProductAdd');
  }

  onSearchChange = (evt) => {
    let value = evt.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        /*products: [],*/
        clearSearchIcon: false,
      });
    } else {
      this.setState({
        clearSearchIcon: true,
      });

    }
    Client.search(value, (products) => {
       this.setState({
          products: products.slice(0, MAX_NUMBER_OF_PRODUCTS),
       },() => { 
       // setState is asynchronous, the following is executed after the callback returns
        this.sortProducts(this.state.sortProperty)
      });
    });  
  };

  onRemoveIconClick = () => {
    this.setState({
      /*products: [],*/
      clearSearchIcon: false,
      searchValue: '',
    });

    Client.search('', (products) => {
      this.setState({
        products: products.slice(0, MAX_NUMBER_OF_PRODUCTS),
      });
    });
  };

  render() {
    return (
      <div id="row" className="d-flex justify-content-center">
        <table className='row col-md-10 table table-hover centerContent'>
          <thead>
            <tr>
              <th scope="col" colSpan='12'>
                <div className='form-row'>
                  <div className='input-group col-md-6'>
                    <input
                      className='form-control'
                      type='text'
                      id='inputProductSearch'
                      placeholder='Search products ...'
                      value={this.state.searchValue}
                      onChange={this.onSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <div>
                    <form className="form-inline">
                      <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Sort By</label>
                      <select 
                        className="custom-select mb-2 mr-sm-2 mb-sm-0" 
                        id="sortProperty" 
                        className="form-control"
                        name="sortProperty"
                        value={this.state.sortProperty ? this.state.sortProperty : ""}
                        onChange={this.handleSortChange}>
                      >
                        <option value="Not Selected">Default</option>
                        <option value="Price Ascending">Price Ascending</option>
                        <option value="Price Descending">Price Descending</option>
                        <option value="Rating Ascending">Rating Ascending</option>
                        <option value="Rating Descending">Rating Descending</option>
                      </select>
                    </form>
                  </div>
                  {
                    this.state.clearSearchIcon ? (
                      <i
                        className='big remove icon'
                        onClick={this.onRemoveIconClick}
                      />
                    ) : ''
                  }
                  {
                    (Client.getCookie("adminToken")) ? (
                      <div className="col-md-2">
                        <button 
                          type="button" 
                          id="productAdd" 
                          className="btn btn-md btn-primary btn-success align-right" 
                          onClick={this.handleProductAdd}>Add Product 
                        </button>
                      </div>
                    ) : <p></p>
                  }
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" colSpan="2" width="250">&emsp;</th>
              <th scope="col" colSpan="3">Model</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Color</th>
              <th scope="col">Size</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Details</th>
              { !(Client.getCookie("adminToken")) ? (
              <th></th>
              ) : <th></th>
              }
            </tr>
          </thead>
          <tbody>
          {
            this.state.products.map((product, index) => (
              <tr
                key={index}
                onClick={() => this.props.onProductClick(product)}
              >
                <td><img src={product.imagePath} width="200" /></td>
                <td className='right aligned'>
                  {product.model}
                </td>
                <td className='right aligned'>
                  {product.manufacturer}
                </td>
                <td className='right aligned'>
                  {product.color}
                </td>
                <td className='right aligned'>
                  {product.size}
                </td>
                <td className='right aligned'>
                  {product.rating}
                </td>
                <td className='right aligned'>
                  {product.price}
                </td>
                <td className='right aligned'>
                  <a href="#" onClick={() => this.props.onDetailClick(product)} >
                    <i className='info circle icon'/> Details
                  </a>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

function checkQuantity(product) {
  return (product.inventoryQuantity > 0 );
}

export default ProductSearch;
