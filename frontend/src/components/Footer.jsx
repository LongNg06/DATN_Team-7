import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Thông tin công ty</h3>
          <p>Công ty Corelab</p>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>Điện thoại: 1900 6750</p>
          <p>Email: duantotnghiep@fpt.edu.vn</p>
        </div>
        <div className="footer-column">
          <h3>Hỗ trợ</h3>
          <p>Hotline: 1900 6750</p>
          <p>Email: duantotnghiep@fpt.edu.vn</p>
          <p>Giờ làm việc: 8:00 - 17:00</p>
        </div>
        <div className="footer-column">
          <h3>Chính sách</h3>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo mật</p>
          <p>Điều khoản sử dụng</p>
        </div>
        <div className="footer-column">
          <h3>Kết nối với chúng tôi</h3>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Twitter</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Corelab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;