import React from 'react';

export default function ShoppingCart(props) {

  return (
    <div className="container text-center">
      <div className="row">
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='6'>
                <h3>Shopping Cart</h3>
              </th>
            </tr>
            <tr>
              {/* <th className='eight wide'>Description</th> */}
              <th className='center aligned'>Manufacturer</th>
              <th className='center aligned'>Model</th>
              <th className='center aligned'>Color</th>
              <th className='center aligned'>Size</th>
              <th className='center aligned'>Qty</th>
              <th className='center aligned'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className='center aligned'>Raliegh</td>
               <td className='center aligned'>Sport200</td>
               <td className='center aligned'>blue</td>
               <td className='center aligned'>L</td>
               <td className='center aligned'>2</td>
               <td className='center aligned'>$354.12</td>
            </tr>
            <tr>
               <td className='center aligned'>Schwin</td>
               <td className='center aligned'>Gogo</td>
               <td className='center aligned'>blue</td>
               <td className='center aligned'>L</td>
               <td className='center aligned'>2</td>
               <td className='center aligned'>$144.12</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="5">Total</th>
              <th
                className='center aligned'
                id='price'
              >
                $777.66
              </th>
            </tr>
          </tfoot>
        </table>
        <div className="container text-right">
          <button className="btn btn-md btn-success">Checkout</button>
        </div>
    </div>
  </div>
  );
}

// helper functions

