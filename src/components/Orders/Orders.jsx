import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }

  //console.log(savedCart);
  return (
    <div className='shop-container'>
      <div className='review-container'>
        {
          cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart} handleClearCart={handleClearCart}>

          <Link className='proceed-link' to="/checkout"> <button className='btn-proceed'>proceed checkout</button> </Link>

        </Cart>

      </div>
      
    </div>
  );
};

export default Orders;