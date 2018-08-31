import React from 'react';
import ProductsPage from '../ProductsPage';

const MAX_PRODUCTS_DISPLAYED = 15;


class ProductSearch extends React.Component {
  state = {
    products: [],
    searchValue: '',
  };

  handleSearchChange = (e) => {
    console.log("handleSearchChange " + e.target.value);
    const searchTerm = e.target.value;

    this.setState({
      searchValue: searchTerm,
    });

    if (searchTerm === '') {
      this.setState({
        products: [],
      });
    } else {
      this.setState({
      });

      ProductsPage.search(searchTerm, (products) => {
        console.log("Calling search from ProductSearch, searchTerm = " + searchTerm);
        this.setState({
          products: products.slice(0, MAX_PRODUCTS_DISPLAYED),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      products: [],
      searchValue: '',
    });
  };

  render() {
    return (
      <div>
        <table >
          <thead>
            <tr>
              <th colSpan='5'>
                <div className=''>
                  <div className=''>
                    <input
                      className=''
                      type='text'
                      placeholder='Search products...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='' />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className=''>Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.products.map((product, id) => (
              <tr
                key={id}
                onClick={() => this.props.onProductClick(product)}
              >
                <td>{product.manufacturer}</td>
                <td className='right aligned'>{product.model}</td>
                <td className='right aligned'>{product.color}</td>
                <td className='right aligned'>{product.price}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductSearch;
