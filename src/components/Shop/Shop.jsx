import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart);
  }, [])

  const handelAddToCart = (product) =>{
    // console.log(product)
    const newCart = [...cart, product]
    setCart(newCart);
    addToDb(product.id)
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>)
        }

      </div>

      <div className='cart-container'>
        
        <Cart cart={cart}></Cart>

      </div>
      
    </div>
  );
};

export default Shop;