import React from 'react';
import ProductCard from './ProductCard';
import laptop1 from '../assets/sample-product.jpg';
import laptop2 from '../assets/sample-product.jpg';
import laptop3 from '../assets/sample-product.jpg';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Laptop Core X', price: '25.000.000 VNĐ', image: laptop1 },
    { id: 2, name: 'Laptop Core Z', price: '32.000.000 VNĐ', image: laptop2 },
    { id: 3, name: 'Laptop Core S', price: '18.000.000 VNĐ', image: laptop3 },
  ];

  return (
    <section className="featured-products">
      <h2>Sản phẩm nổi bật</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;