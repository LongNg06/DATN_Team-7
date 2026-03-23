// LaptopCollection.jsx
import React from 'react';
import ProductCard from './ProductCard';
import laptop7 from '../assets/sample-product.jpg';
import laptop8 from '../assets/sample-product.jpg';
import laptop9 from '../assets/sample-product.jpg';
import '../styles/product.css';

const LaptopCollection = () => {
  const products = [
    { id: 1, name: 'Laptop Core P', price: '30.000.000 VNĐ', image: laptop7 },
    { id: 2, name: 'Laptop Core Q', price: '27.000.000 VNĐ', image: laptop8 },
    { id: 3, name: 'Laptop Core R', price: '22.000.000 VNĐ', image: laptop9 },
  ];

  return (
    <section className="laptop-collection">
      <h2>Bộ sưu tập Laptop</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} buyButton={false} />
        ))}
      </div>
    </section>
  );
};

export default LaptopCollection;