import React from 'react';
import '../styles/banner.css';
import imacImage from '../assets/banner.jpg'; // Thay bằng đường dẫn thực tế
import beatphoneImage from '../assets/side-banner.jpg'; // Thay bằng đường dẫn thực tế
import galaxyImage from '../assets/sides-banner.jpg'; // Thay bằng đường dẫn thực tế

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="main-banner">
        <img src={imacImage} alt="IMAC 21.5 IN" />
      </div>
      <div className="side-banners">
        <div className="small-banner top">
          <img src={beatphoneImage} alt="Beatphone" />
        </div>
        <div className="small-banner bottom">
          <img src={galaxyImage} alt="Galaxy S9" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
