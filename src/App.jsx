import React from 'react';
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from "./actions";
import cartIcon from "./assets/images/cart-icon.png";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList.productList);

  const handleAdd = id => {
    dispatch(add(id))
  }

  const handleRemove = id => {
    dispatch(remove(id))
}


  return (
    <div className="App">
      <header className="App-header">
        <div className='heading'> 
          <img src={cartIcon} alt="cart"className='cart-img'/>
          <h2>Shopping Cart</h2>
        </div>
       <div className="container">
          <div className='list-wrapper'>
            <h3>Products</h3>
            <ProductList productList={productList} handleAdd={handleAdd}/>
          </div>
          <div className='list-wrapper'>
              <h3>Your Cart</h3>
              {productList && <Cart productList={productList} handleRemove={handleRemove}/>}
          </div>
         
       </div>
     
      </header>
    </div>
  );
}

export default App;
