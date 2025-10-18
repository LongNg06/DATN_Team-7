import React from 'react';
import '../styles/news.css';
import newsImage from '../assets/news.jpg';

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2>Tin tức</h2>
      <div className="news-content">
        <img src={newsImage} alt="Tin tức" className="news-image" />
        <p>Khuyến mãi đặc biệt tháng 10 - Giảm 20% tất cả sản phẩm!</p>
        <p>Công nghệ mới nhất từ Corelab - Ra mắt dòng laptop Core X.</p>
      </div>
    </section>
  );
};

export default NewsSection;