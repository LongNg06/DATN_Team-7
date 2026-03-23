import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <span>Chào mừng bạn đến với Công nghệ số CoreLab !</span>
        <div className="top-right">
          <span className="cart-count">0 sản phẩm</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <img src="/logo.png" alt="CoreLab Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." />
          <button className="search-btn">Tìm kiếm</button>
        </div>
        <div className="user-actions">
          <a href="#" className="login-btn">Đăng nhập</a>
          <a href="#" className="register-btn">Đăng ký</a>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-actions">
        <ul className="nav-links">
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Giới thiệu</a></li>
          <li><a href="#">Sản phẩm</a></li>
          <li><a href="#">Tin tức</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
        <div className="payment-action">
          <a href="#" className="payment-btn">Sản phẩm <span className="product-count">(0)</span></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <a href="#" className="bottom-item">🚚 Miễn phí vận chuyển</a>
        <a href="#" className="bottom-item">⏰ Hỗ trợ 24/7</a>
        <a href="#" className="bottom-item">💰 Hoàn tiền trong 15 ngày</a>
        <a href="#" className="bottom-item">🎉 Giảm giá theo đơn hàng</a>
      </div>
    </header>
  );
};

export default Header;