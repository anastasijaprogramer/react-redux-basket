import React from 'react';

function Product({ product, quan }) {
  return (
    <li>
      {product.name} - ${product.price} x {quan}
    </li>
  );
}

export default Product;
