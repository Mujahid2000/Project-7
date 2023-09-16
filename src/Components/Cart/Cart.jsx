/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';

const Cart = ({ newSelectedLanguage }) => {
 

  let sum = newSelectedLanguage.reduce((total, actor) => total + actor.price, 0);
  let sumHour = newSelectedLanguage.reduce((total, actor) => total + actor.credit_in_hour, 0);
  
  const remainingHour = 20 - sumHour;

  return (
    <div>
      <div className='main-cart'>
        <div className="cart">
          <h4 className='first-title'>Credit Hour Remaining {remainingHour} hr</h4>
          <hr />
          <h4 className='title'>Course Name</h4>
          <hr />
          <ul>
            {newSelectedLanguage.map((actor, index) => (
              <li key={actor.id}>{index + 1}. {actor.title}</li>
            ))}
          </ul>
          <p className='sum-hour'>Total Credit: {sumHour}</p>
          <hr />
          <p className='sum-total'>Total Price: {sum} USD </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
