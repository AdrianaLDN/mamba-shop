import React, { useContext } from 'react';
import './item.css';
import { ShopContext } from '../context/shop-context';


export const Item = (props) => {
    const {id, itemName, price, itemImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

  return (
    <div>
      <div  className='product-card'>
         <img className='product-img' src={itemImage} alt='' />
         <p> {itemName} </p>
         <p> £{price} </p>
         <button className='btnAdd' onClick={() => addToCart(id)}>
            {/* Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} */}
            Add to Cart {cartItemAmount > 0 && cartItemAmount}
         </button>
      </div>
    </div>
  )
}
