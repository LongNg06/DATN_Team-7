import React from 'react';
import ProductCard from './ProductCard';
import sample from '../assets/sample-product.jpg';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Laptop Core X', price: '25.000.000', image: sample },
    { id: 2, name: 'Laptop Core Z', price: '32.000.000', image: sample },
    { id: 3, name: 'Laptop Core S', price: '18.000.000', image: sample },
  ];

  return (
    <section className="product-section">
      <h2>Sản phẩm nổi bật</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
