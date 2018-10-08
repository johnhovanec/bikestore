import React from 'react';

export default function ShoppingCart(props) {

  return (
    <div>
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
            <h3>Contents</h3>
          </tr>
          <tr>
           {/*
             //props.products.map((product, idx) => (
               <tr
                 //key={idx}
                 //onClick={() => props.onProductClick(idx)}
               >
                 {/* <td>{food.description}</td> */}
                 <td className='center aligned'>{product.manufacturer}</td>
                 <td className='center aligned'>{product.model}</td>
                 <td className='center aligned'>{product.color}</td>
                 <td className='center aligned'>{product.size}</td>
                 <td className='center aligned'>{getQuantity(props.products, 'inventoryQuantity')}</td>
                 <td className='center aligned'>${product.price}</td>
               </tr>
             ))
           */}
           </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="5">Total</th>
            <th
              className='center aligned'
              id='price'
            >
              ${sumProducts(props.products, 'price')}
            </th>
          </tr>
        </tfoot>
      </table>
      <div>
        <button className="btn btn-md btn-success">Checkout</button>
      </div>
    </div>
  );
}

// helper function
function sumProducts(products, prop) {
  return products.reduce((memo, product) => (
    parseFloat(product[prop], 10) + memo
  ), 0.0).toFixed(2);
}

function getQuantity(products, prop) {
  let qtyInCart = 0;
  var qtyAvailable = products.reduce((memo, product) => (
    parseInt(product[prop], 10) + memo
  ), 0.0);

  if (qtyInCart <= qtyAvailable)
    return qtyInCart + 1;
}
