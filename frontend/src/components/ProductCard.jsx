import React from 'react';
import '../styles/home.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}₫</p>
      <button>Xem chi tiết</button>
    </div>
  );
};

export default ProductCard;
