import React, { useContext } from 'react';
import './cart.css';
import { ItemsList } from '../../Items/itemsList';
import { ShopContext } from '../../context/shop-context';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';


function Cart () {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    //hook to navigate between pages!!!
    const navigate = useNavigate();
  
    return (
        <div>
            <div className='cartPage'>
                    <h2>Your Items</h2>

                <div className='cartItems'>
                    {Object.keys(cartItems).some((key) => cartItems[key] > 0) ? (
                        ItemsList.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return <CartItem key={index} data={item} />;
                        }
                        return null;
                        })
                    ) : (
                        <p className='emptyCart'>Your cart is empty</p>
                    )}
                </div>
                    
                    <div className='checkout'>
                        <p className='total'> Subtotal: £ {totalAmount}</p>
                        <button onClick={() => navigate('/')}> Continue Shopping </button>
    
                        {totalAmount > 0 ? (
                            <button onClick={() => navigate('/checkout')}> Checkout </button>
                        ) : (
                            <button disabled> Checkout </button>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default Cart;





