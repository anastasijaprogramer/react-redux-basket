import React from 'react';
import Product from './Product';

function Cart({ productList, handleRemove }) {
  let total = 0;
  productList.forEach(product => total += product.price * product.quanCart);
  return (
    <div className="cart">
      <ul className="product-list">
        {productList.map(product => (
          product.quanCart > 0 && (
            <div className='list-item-wrapper'>
              <Product key={product.id} product={product} quan={product.quanCart}/>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          )
        ))}
      </ul>
      <p className='total'>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
