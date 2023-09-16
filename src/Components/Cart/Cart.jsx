/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';

const Cart = ({ newSelectedLanguage }) => {
  console.log(newSelectedLanguage);

  let sum = 0;
  let sumHour = 0;
  
  for (let i = 0; i < newSelectedLanguage.length; i++) {
    sum += newSelectedLanguage[i].price;
    sumHour += newSelectedLanguage[i].credit_in_hour;
  }

  const remainingHour = 20 - sumHour;

  return (
    <div>
      <div className='main-cart'>
        <div className="cart">
          <h4><a href="">Credit Hour Remaining {remainingHour} hr</a></h4>
          <hr />
          <h4>Course Name</h4>
          <ul>
            {newSelectedLanguage.map(actor => (
              <li key={actor.id}>{actor.title}</li>
            ))}
          </ul>
          <p>Total Credit: {sumHour}</p>
          <p>Total Price: {sum} USD </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
