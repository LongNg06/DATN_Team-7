import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SupportSection from '../components/SupportSection';
import FeaturedProducts from '../components/FeaturedProducts';
import NewsSection from '../components/NewsSection';
import NewProducts from '../components/NewProducts';
import LaptopCollection from '../components/LaptopCollection';
import Footer from '../components/Footer';
import '../styles/main.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="main-content">
        <div className="left-column">
          <SupportSection />
          <FeaturedProducts />
          <NewsSection />
        </div>
        <div className="right-column">
          <NewProducts title="Sản phẩm mới" />
          <NewProducts title="Sản phẩm nổi bật" />
          <LaptopCollection/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;