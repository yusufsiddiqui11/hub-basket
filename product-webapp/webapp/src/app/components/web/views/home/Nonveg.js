import React, { useState } from 'react';
import './Nonveg.css';
import Sdata from './Sdata';

const Nonveg = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);};

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);}};

  return (
    <div className="grid-container">
      <div className="product-card">
        <img src={props.imgsrc} alt='' className='image'></img>
        <div className="product_content">
          <h4>{props.product}</h4>
          <div className="price-and-button">
            <h6>₹ {props.price}/{props.unit}</h6>
            {quantity === 0 ? (<button className='addbutton' onClick={handleIncrement}>Add Cart</button>) : (
              <div className="quantity-controls">
                <button className='decb' onClick={handleDecrement}>-</button>
                <span className='quant'>{quantity}</span>
                <button className='incb' onClick={handleIncrement}>+</button>
              </div> )}
          </div>
        </div>
      </div>
    </div>);};
 

const Cards = () => {
  return (
    <>
     <div className="card-container">
      {Sdata.map((val) => (
        <Nonveg
          key={val.id} // Use the unique 'id' as the key
          imgsrc={val.imgsrc}
          product={val.product}
          price={val.price}
          unit={val.unit}
        />
      ))}
    </div>
    </>);};

export default Cards;
