import React from 'react';
import Product from './Product';

function ProductList({ productList, handleAdd }) {
  
  return (
    <ul className="product-list">
      {productList.map(product => {
        const quan = product.quanTotal - product.quanSell - product.quanCart;
        return (
          <>
            <Product key={product.id} product={product} quan={quan} />
            <button
              onClick={() => handleAdd(product.id)}
              disabled={quan === 0}
            >Add to cart</button>
          </>
        );
      })}
    </ul>
  );
}

export default ProductList;
