// src/components/ProductCard.js
import React from 'react';

const ShopCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ShopCard;
