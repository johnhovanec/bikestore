import React from 'react';
import Client from './../Client';

const MAX_NUMBER_OF_PRODUCTS = 15;

class ProductSearch extends React.Component {
  state = {
    products: [],
    clearSearchIcon: false,
    addToCartIcon: '',
    searchValue: '',
  };

  componentDidMount() {
    console.log("Component mounted and now calling search for initial populate.");
    Client.search('', (products) => {
      this.setState({
        products: products.slice(0, MAX_NUMBER_OF_PRODUCTS),
      });
    });
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
      <div id=''>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope="col" colSpan='8'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search products ...'
                      value={this.state.searchValue}
                      onChange={this.onSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  {
                    this.state.clearSearchIcon ? (
                      <i
                        className='big remove icon'
                        onClick={this.onRemoveIconClick}
                      />
                    ) : ''
                  }
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Model</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Color</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Details</th>
              <th scope="col">Add To Cart</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.products.map((product, index) => (
              <tr
                key={index}
                // onClick={() => this.props.onProductClick(product)}
              >
                <td>{product.description}</td>
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
                  {product.price}
                </td>
                <td className='right aligned'>
                  <a href="#" onClick={() => this.props.onDetailClick(product)} >
                    <i className='info circle icon'/> Details
                  </a>
                </td>
                <td className='center aligned'>
                  {
                    checkQuantity(product) ? (
                      <a href="#" onClick={() => this.props.onProductClick(product)} >
                        <i
                          className='big shopping cart icon'
                        /> Add to Cart
                      </a>
                    ) :
                    <i
                    className='big remove icon red'
                  /> 
                }

                  {/* {
                    this.state.addToCartIcon ? (
                      <i
                        className='big remove icon'
                        onClick={this.onRemoveIconClick}
                      />
                    ) : 'Nope'
                  } */}
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
