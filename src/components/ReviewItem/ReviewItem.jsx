import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'


const ReviewItem = ({product, handleRemoveFromCart}) => {
  const{id, img, price, name, quantity} = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />

      <div className='review-details'>
        <p className='product-title'>{name}</p>
        <p>Place: <span className='orange-text'> ${price} </span></p>
        <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>

      </div>

      <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faDeleteLeft}></FontAwesomeIcon> </button>
    </div>
  );
};

export default ReviewItem;