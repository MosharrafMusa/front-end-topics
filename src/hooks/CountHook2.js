import React from 'react'

const AddToCart = ({ available }) => {
    if (!available) return null;
  
    return (
      <div className="full tr">
        <button className="product--cart-button">Add to Cart</button>
      </div>
    );
  };


export default AddToCart;