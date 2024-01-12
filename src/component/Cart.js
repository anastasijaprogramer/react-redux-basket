import React from 'react';
import Product from './Product';

function Cart({ productList, handleRemove }) {
  let total = 0;
  productList.forEach(product => total += product.price * product.quanCart);
  return (
    <div className="cart">
      <ul>
        {productList.map(product => (
          product.quanCart > 0 && (
            <>
              <Product key={product.id} product={product} quan={product.quanCart}/>
              <button onClick={() => handleRemove(product.id)}>Remove from cart</button>
            </>
          )
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
