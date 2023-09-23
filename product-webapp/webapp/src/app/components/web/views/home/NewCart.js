// NewCart.js
import React, {Component} from 'react';
import { Nonveg } from './Nonveg';
import Cards from './Nonveg';
import './NewCart.css'

const NewCart = ({ cartItems, removeFromCart, calculateSubtotal }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.product} - ₹{item.price}/{item.unit} x {item.quantity}{' '}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <p>Subtotal: ₹{calculateSubtotal()}</p>
        {/* Add Total and any other cart-related information here */}
      </div>
    </div>
  );
};

export default NewCart;
