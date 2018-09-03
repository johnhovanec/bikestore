import React from 'react';
import Client from './../Client';

const MAX_NUMBER_OF_PRODUCTS = 1;

class ProductDetail extends React.Component {
  state = {
    product: {},
    clearSearchIcon: false,
    addToCartIcon: '',
    searchValue: '',
  };

  componentDidMount() {
    console.log("Product Detail Component mounted and now calling populate for id: " + this.props.match.params.id);
    Client.getDetail(this.props.match.params.id, (product) => {
      this.setState({
        product: product,
      });
    });
  }

  render() {
    return (
      <div id=''>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='8'>
                <div className='ui fluid search'>
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
              <th className='eight wide'>Description</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th>Details</th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>
          {
            
              <tr
                
                // onClick={() => this.props.onProductClick(product)}
              >
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
              </tr>   
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

export default ProductDetail;
