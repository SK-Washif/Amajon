import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, handleClearCart, children}) => {
  //const {cart} = props;

  console.log(cart);
  let total= 0;

  let totalShipping = 0;
  let quantity = 0;

  for(const product of cart){
  //   if(product.quantity === 0){
  //     product.quantity = 1;
  //   }


    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total*(7/100);

  const grandTotal = total + totalShipping  + tax;

  return (
    <div className='cart'>
      <h2>order</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart} className='btn-clear-cart'>
        <span>Clear Cart</span>
        <FontAwesomeIcon  icon={faDeleteLeft}></FontAwesomeIcon> 
      </button>
      {children}
    </div>
  );
};


export default Cart;