import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCart =getShoppingCart();
    const savedCart = [];

    //get id of the added product
    for(const id in storedCart){
      //get product from the products state by using id
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct){
        //added quantity
        const quantity = storedCart[id];
        storedCart.quantity = quantity;
        //add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      //console.log(addedProduct)
    }
    //set the cart
    setCart(savedCart);
  }, [products])

  const handelAddToCart = (product) =>{
    // console.log(product)
    // const newCart = [...cart, product]
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else{
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter( pd => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
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