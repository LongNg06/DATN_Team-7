import React from "react";
import { Link } from "react-router-dom";
import "../../style/productdetail.css"
const ProductPage = ({ ASSET_PATH = "/assets" }) => {
  return (
    <>
      <header id="section-header" className="site-header">
        <div className="container header-container">
          <a href="#" className="logo">
            <img src={`${ASSET_PATH}/1b26f06cfc31998bfb34742de83aaaf283f20b0a.png`} alt="Logo" />
          </a>
          <button className="header-btn">Danh mục</button>
          <button className="header-btn">Hồ Chí Minh</button>
          <div className="search-bar">
            <input type="text" placeholder="Bạn muốn mua gì hôm nay ?" />
          </div>
          <a href="#" className="header-link">Giỏ hàng</a>
          <a href="#" className="header-btn login-btn">Đăng nhập</a>
        </div>

        <nav className="breadcrumbs">
          <div className="container breadcrumbs-container">
            <a href="#">Trang chủ</a>
            <span>/</span>
            <a href="#">Sản phẩm</a>
            <span>/</span>
            <p>Chi tiết sản phẩm</p>
          </div>
        </nav>
      </header>

      <section id="section-product" className="product-section">
        <div className="container product-container">
          <div className="product-gallery">
            <img
              src={`${ASSET_PATH}/bf77cc37aa6a54dceda1d845771b1a6b53524624.png`}
              alt="Laptop Acer Aspire E5-411"
            />
          </div>

          <div className="product-details">
            <h1 className="product-title">Laptop Acer Aspire E5-411</h1>
            <p className="product-rating">⭐ ⭐ ⭐ ⭐ ⭐ 6 đánh giá</p>

            <div className="product-options-grid">
              <button className="option-button active">
                <span>256GB</span>
                <span>39.000.000vnđ</span>
              </button>
              <button className="option-button">
                <span>512GB</span>
                <span>46.999.000</span>
              </button>
              <button className="option-button">
                <span>256GB</span>
                <span>39.000.000vnđ</span>
              </button>
              <button className="option-button">
                <span>512GB</span>
                <span>46.999.000</span>
              </button>
            </div>

            <p className="color-selection-title">Chọn màu bạn muốn xem</p>
            <div className="color-options">
              {["Xanh", "Cam", "Bạc", "Tím"].map((color, index) => (
                <button className="color-swatch" key={index}>
                  <img
                    src={`${ASSET_PATH}/968845f0a14b8dd8f9c4504d810abc6294a87b3a.png`}
                    alt={`${color} color option`}
                  />
                  <div className="color-info">
                    <span className="color-name">{color}</span>
                    <span className="color-price">39.000.000đ</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="price-summary">
              <span className="final-price">39.000.000đ</span>
              <div className="divider"></div>
              <p className="installment-info">
                Chỉ cần trả trước:<br />
                <strong>11.999.7000đ</strong>
              </p>
            </div>

            <div className="promotions">
              <h3 className="promo-title">Khuyến mãi</h3>
              <p className="promo-main">
                Cam kết hàng Chính Hãng Việt Nam - Mới 100% - Nguyên Seal
              </p>
              <ul className="promo-list">
                <li>
                  Ưu đãi <strong>Giá Bán Đặc biệt</strong> khi áp dụng chương trình cũ đổi mới:
                  <span className="promo-highlight"> Rẻ hơn 1 triệu</span>
                </li>
                <li><strong>Ưu đãi khi mua hàng:</strong></li>
                <li>
                  Thu cũ đổi mới <span className="promo-highlight-percent">90%</span> giá trị máy
                </li>
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-stepper">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="btn-add-to-cart">
  <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
    Thêm vào giỏ
  </Link>
</button>
            </div>
          </div>
        </div>
      </section>

      <section id="section-comments" className="comments-section">
        <div className="container">
          <h2 className="comments-title">Bình luận về Laptop Acer Aspire E5-411</h2>
          <div className="comments-wrapper">
            <div className="user-comments">
              <h3>Bình luận từ người dùng khác</h3>
              <article className="comment-item">
                <p className="comment-author">Người dùng 1</p>
                <p className="comment-date">10/12/2024 08:10</p>
                <p className="comment-text">Máy đẹp, giao hàng nhanh, rất hài lòng!</p>
              </article>
              <hr className="comment-divider" />
              <article className="comment-item">
                <p className="comment-author">Người dùng 2</p>
                <p className="comment-date">10/12/2024 08:10</p>
                <p className="comment-text">Chất lượng tốt, giá rẻ.</p>
              </article>
            </div>

            <div className="comment-form-container">
              <h3>Bình luận sản phẩm</h3>
              <form className="comment-form">
                <textarea placeholder="Viết bình luận về sản phẩm của bạn ..."></textarea>
                <button type="submit" className="btn-submit-comment">Gửi bình luận</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id="section-footer" className="site-footer">
        <div className="footer-main">
          <div className="container footer-grid">
            {/* Cột 1 */}
            <div className="footer-col">
              <h4 className="footer-title">Tổng đài hỗ trợ miễn phí</h4>
              <p>Mua hàng - bảo hành <strong>1800.2097</strong> (7h30 - 22h00)</p>
              <p>Khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)</p>
            </div>

            {/* Cột khác có thể giữ nguyên cấu trúc */}
            {/* ... */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProductPage;
