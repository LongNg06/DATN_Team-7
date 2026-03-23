// NewProducts.jsx
import React from 'react';
import ProductCard from './ProductCard';
import laptop4 from '../assets/sample-product.jpg';
import laptop5 from '../assets/sample-product.jpg';
import laptop6 from '../assets/sample-product.jpg';

const NewProducts = ({ title }) => {
  const products = [
    { id: 1, name: 'Laptop Core Y', price: '28.000.000 VNĐ', image: laptop4 },
    { id: 2, name: 'Laptop Core W', price: '35.000.000 VNĐ', image: laptop5 },
    { id: 3, name: 'Laptop Core V', price: '20.000.000 VNĐ', image: laptop6 },
  ];

  return (
    <section className="new-products">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} buyButton={true} />
        ))}
      </div>
    </section>
  );
};

export default NewProducts;