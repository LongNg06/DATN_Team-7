// ProductCard.jsx
import React from 'react';
import '../styles/product.css';

const ProductCard = ({ name, price, image, buyButton }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      {buyButton ? (
        <button>Mua hàng</button>
      ) : null} {/* Không hiển thị nút nếu buyButton là false */}
    </div>
  );
};

export default ProductCard;